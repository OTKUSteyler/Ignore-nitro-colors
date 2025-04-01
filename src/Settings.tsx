import { useProxy } from "@vendetta/storage";
import { storage } from "@vendetta/plugin";
import { Forms } from "@vendetta/ui/components";

const { FormSwitch } = Forms;

export default function Settings() {
    useProxy(storage);

    return (
        <FormSwitch
            label="Disable Nitro Profile Colors"
            value={storage.disableProfileColors ?? true}
            onValueChange={(value) => {
                storage.disableProfileColors = value;
            }}
        />
    );
}
