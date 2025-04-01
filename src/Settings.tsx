import { storage } from "@vendetta/plugin";
import { useProxy } from "@vendetta/storage";
import { Forms } from "@vendetta/ui/components";

const { FormSwitchRow } = Forms;

export default function Settings() {
    useProxy(storage);

    return (
        <FormSwitchRow
            label="Disable Nitro Profile Colors"
            value={storage.disableProfileColors ?? true}
            onValueChange={(value) => {
                storage.disableProfileColors = value;
            }}
        />
    );
}
