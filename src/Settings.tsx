import { storage } from "@vendetta/plugin";
import { useProxy } from "@vendetta/storage";
import { General } from "@vendetta/ui/components";

const { FormSwitch } = General;

export default function Settings() {
    useProxy(storage);
    
    return (
        <FormSwitch
            label="Ignore Nitro Profile Colors"
            value={storage.ignoreProfileColors ?? true}
            onValueChange={(value) => (storage.ignoreProfileColors = value)}
        />
    );
}
