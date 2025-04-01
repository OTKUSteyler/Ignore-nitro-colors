import { after } from "@vendetta/patcher";
import { findByProps } from "@vendetta/metro";
import { addSettings } from "@vendetta/ui/settings";
import Settings from "./Settings";

// Fetch the UserStore that handles profile data
const UserStore = findByProps("getUser", "getCurrentUser");

let unpatch: (() => void) | undefined;

// Function to start the plugin
export function onLoad() {
    unpatch = after("getUser", UserStore, ([userId], res) => {
        if (!res) return res;

        // Remove Nitro profile colors if enabled
        if (storage.ignoreProfileColors) {
            res.accentColor = null;
            res.bannerColor = null;
        }

        return res;
    });

    addSettings("Ignore Nitro Profile Colors", Settings);
}

// Function to stop the plugin
export function onUnload() {
    unpatch?.();
}
