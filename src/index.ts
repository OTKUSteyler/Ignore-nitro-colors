import { after } from "@vendetta/patcher";
import { findByProps } from "@vendetta/metro";
import { storage } from "@vendetta/plugin";
import { forceUpdateAll } from "@vendetta/ui/updates";
import Settings from "./Settings";

// Modules responsible for user profiles and member lists
const ProfileModule = findByProps("getUserProfile", "fetchProfile");
const MemberListModule = findByProps("getMember", "getMembers");

let unpatchProfile: (() => void) | undefined;
let unpatchMemberList: (() => void) | undefined;

export function onLoad() {
    console.log("[IgnoreProfileColors] Plugin loading...");

    // Patch getUserProfile to remove profile colors
    unpatchProfile = after("getUserProfile", ProfileModule, ([userId], result) => {
        if (!storage.disableProfileColors) return;
        if (result && result.profile) {
            result.profile.accentColor = null;
            result.profile.bannerColor = null;
            console.log(`[IgnoreProfileColors] Removed colors for user ${userId}`);
        }
    });

    // Patch getMember to remove member-specific colors
    unpatchMemberList = after("getMember", MemberListModule, ([guildId, userId], result) => {
        if (!storage.disableProfileColors) return;
        if (result) {
            result.colorString = null;
            console.log(`[IgnoreProfileColors] Removed member color for user ${userId} in guild ${guildId}`);
        }
    });

    // Force UI update to apply changes
    forceUpdateAll();

    console.log("[IgnoreProfileColors] Plugin loaded!");
}

export function onUnload() {
    unpatchProfile?.();
    unpatchMemberList?.();
    forceUpdateAll();
    console.log("[IgnoreProfileColors] Plugin unloaded.");
}

export const settings = Settings;
