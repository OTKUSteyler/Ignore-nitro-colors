import { after } from "@vendetta/patcher";
import { findByProps } from "@vendetta/metro";
import { storage } from "@vendetta/plugin";
import Settings from "./Settings";

const ProfileModule = findByProps("getUserProfile", "fetchProfile");
let unpatch: (() => void) | undefined;

export function onLoad() {
    console.log("[IgnoreProfileColors] Plugin loading...");

    unpatch = after("getUserProfile", ProfileModule, ([userId], result) => {
        if (!storage.disableProfileColors) return;

        if (result && result.profile) {
            result.profile.accentColor = null;
            result.profile.bannerColor = null;
            console.log(`[IgnoreProfileColors] Removed colors for user ${userId}`);
        }
    });

    console.log("[IgnoreProfileColors] Plugin loaded!");
}

export function onUnload() {
    unpatch?.();
    console.log("[IgnoreProfileColors] Plugin unloaded.");
}

export const settings = Settings;
