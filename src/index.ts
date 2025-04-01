import { after } from "@vendetta/patcher";
import { findByProps } from "@vendetta/metro";
import { addSettings } from "@vendetta/ui/settings";
import Settings from "./Settings";
import { storage } from "@vendetta/plugin";

const UserStore = findByProps("getUser", "getCurrentUser");
let unpatch: (() => void) | undefined;

export function onLoad() {
    console.log("[IgnoreProfileColors] Plugin loaded");

    unpatch = after("getUser", UserStore, ([userId], res) => {
        console.log("[IgnoreProfileColors] Patching getUser", userId);
        if (!res) return res;

        if (storage.ignoreProfileColors ?? true) {
            console.log("[IgnoreProfileColors] Removing colors for", userId);
            res.accentColor = null;
            res.bannerColor = null;
            console.log("[IgnoreProfileColors] Modified user:", res);
        }

        return res;
    });

    addSettings("Ignore Nitro Profile Colors", Settings);
}

export function onUnload() {
    unpatch?.();
    console.log("[IgnoreProfileColors] Plugin unloaded");
}
