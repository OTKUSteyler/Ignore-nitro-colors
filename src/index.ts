import { before } from "@vendetta/patcher";
import { findByProps } from "@vendetta/metro";
import { storage } from "@vendetta/plugin";
import Settings from "./Settings";

// Find the UserStore
const UserStore = findByProps("getUser", "getCurrentUser");
let unpatch: (() => void) | undefined;

export function onLoad() {
    console.log("[IgnoreProfileColors] Plugin loading...");

    unpatch = before("getUser", UserStore, ([userId]) => {
        console.log("[IgnoreProfileColors] Checking user", userId);
        if (!storage.disableProfileColors) return; // Setting must be enabled

        const user = UserStore.getUser(userId);
        if (user) {
            user.accentColor = null;
            user.bannerColor = null;
            console.log("[IgnoreProfileColors] Removed colors for", userId);
        }
    });

    console.log("[IgnoreProfileColors] Plugin loaded!");
}

export function onUnload() {
    unpatch?.();
    console.log("[IgnoreProfileColors] Plugin unloaded.");
}

// Attach settings
export const settings = Settings;
