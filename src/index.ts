import { after } from "@vendetta/patcher";
import { findByProps } from "@vendetta/metro";
import { storage } from "@vendetta/plugin";
import Settings from "./settings";

let unpatch: (() => void) | undefined;

// Find the User Profile component responsible for applying colors
const UserProfile = findByProps("default", "UserProfileBadgeWrapper");

export const onLoad = () => {
    if (!UserProfile) {
        console.error("[Ignore Nitro Colors] Failed to find UserProfile.");
        return;
    }

    // Patch the Nitro Profile colors function
    unpatch = after("default", UserProfile, ([props], res) => {
        if (props?.user && res?.props?.style) {
            res.props.style.color = "#FFFFFF"; // Override Nitro colors with white (or any default color)
        }
        return res;
    });

    console.log("[Ignore Nitro Colors] Plugin successfully loaded!");
};

export const onUnload = () => {
    if (unpatch) {
        unpatch();
    }
    console.log("[Ignore Nitro Colors] Plugin unloaded.");
};

// Export settings so it can be accessed
export { Settings as settings };
