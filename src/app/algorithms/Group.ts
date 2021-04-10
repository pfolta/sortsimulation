import { Palette } from "@/app/theme";

interface GroupKey {
    readonly id: string;
    readonly color: Palette;
}

interface Group extends GroupKey {
    readonly indices: number[];
}

const compareGroup = (indices: number[]): Group => ({
    id: "compare",
    color: "blue",
    indices
});

const sortedGroup = (indices: number[]): Group => ({
    id: "sorted",
    color: "green",
    indices
});

const swapGroup = (indices: number[]): Group => ({
    id: "swap",
    color: "red",
    indices
});

const toGroupKey = (groups: Group[]): GroupKey[] =>
    [...new Map(groups.map((group) => [group.id, group])).values()].map((group) => ({ id: group.id, color: group.color }));

export default Group;
export { compareGroup, sortedGroup, swapGroup };
export { toGroupKey };
