import { settings } from "@vendetta/plugin";
import { after } from "@vendetta/patcher";
import { findByProps } from "@vendetta/metro";
import { forceUpdateAll } from "@vendetta/ui/updates";
import Settings from "./Settings";

const UserProfileModule = findByProps("getUserProfile", "fetchProfile");
const MemberListModule = findByProps("getMember", "getMembers");

let unpatchProfile: (() => void) | undefined;
let unpatchMemberList: (() => void) | undefined;

export function onLoad() {
    console.log("[IgnoreProfileColors] Plugin loaded!");

    if (!settings.disableProfileColors) settings.disableProfileColors = true;

    // Patch user profiles (DMs, profiles, popups)
    unpatchProfile = after("getUserProfile", UserProfileModule, ([userId], result) => {
        if (!settings.disableProfileColors) return;
        if (result?.profile) {
            result.profile.accentColor = null;
            result.profile.bannerColor = null;
            console.log(`[IgnoreProfileColors] Removed colors for user ${userId}`);
        }
    });

    // Patch server members (guild lists)
    unpatchMemberList = after("getMember", MemberListModule, ([guildId, userId], result) => {
        if (!settings.disableProfileColors) return;
        if (result) {
            result.colorString = null;
            console.log(`[IgnoreProfileColors] Removed member color for user ${userId} in guild ${guildId}`);
        }
    });

    forceUpdateAll();
}

export function onUnload() {
    unpatchProfile?.();
    unpatchMemberList?.();
    forceUpdateAll();
    console.log("[IgnoreProfileColors] Plugin unloaded.");
}

export const settingsPanel = Settings;
