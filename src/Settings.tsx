import { useState } from "react";
import { storage } from "@vendetta/plugin";
import { View, Text } from "@vendetta/metro/common";
import { Switch } from "@vendetta/ui/components";

const Settings = () => {
    const [enabled, setEnabled] = useState(storage.ignoreNitroColors ?? true);

    return (
        <View style={{ padding: 10 }}>
            <Text style={{ fontSize: 16, marginBottom: 10 }}>
                Disable Nitro Profile Colors
            </Text>
            <Switch
                value={enabled}
                onValueChange={(value) => {
                    setEnabled(value);
                    storage.ignoreNitroColors = value;
                }}
            />
        </View>
    );
};

export default Settings;
