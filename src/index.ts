import { findByProps } from "@vendetta/metro";
import { before } from "@vendetta/patcher";

const UserProfile = findByProps("UserProfile");

export default {
  onLoad: () => {
    before("render", UserProfile, (args) => {
      if (args[0]?.user?.accentColor) {
        args[0].user.accentColor = null;
      }
    });
  },
  onUnload: () => {
    // clean patches here
  }
};
