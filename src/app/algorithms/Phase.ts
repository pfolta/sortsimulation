import { Palette } from "@/app/theme";

interface Phase {
    readonly key: string;
    readonly color: Palette;
}

const compare: Phase = {
    key: "compare",
    color: "blue"
};

const swap: Phase = {
    key: "swap",
    color: "red"
};

export default Phase;
export { compare, swap };
