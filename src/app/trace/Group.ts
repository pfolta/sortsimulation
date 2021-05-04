import { Palette } from "@/app/theme";

enum GroupId {
    COMPARE = "COMPARE",
    MINIMUM = "MINIMUM",
    OVERWRITE = "OVERWRITE",
    SORTED = "SORTED",
    SWAP = "SWAP"
}

interface GroupKey {
    readonly id: GroupId;
    readonly color: Palette;
}

interface Group extends GroupKey {
    readonly indices: number[];
}

const compareGroup = (indices: number[]): Group => ({
    id: GroupId.COMPARE,
    color: "yellow",
    indices
});

const minimumGroup = (index: number): Group => ({
    id: GroupId.MINIMUM,
    color: "blue",
    indices: [index]
});

const overwriteFromMemoryGroup = (indices: number[]): Group => ({
    id: GroupId.OVERWRITE,
    color: "orange",
    indices
});

const sortedGroup = (indices: number[]): Group => ({
    id: GroupId.SORTED,
    color: "green",
    indices
});

const swapGroup = (indices: number[]): Group => ({
    id: GroupId.SWAP,
    color: "red",
    indices
});

const toGroupKey = (groups: Group[]): GroupKey[] =>
    [...new Map(groups.map((group) => [group.id, group])).values()].map((group) => ({ id: group.id, color: group.color }));

export default Group;
export { GroupId };
export { compareGroup, minimumGroup, overwriteFromMemoryGroup, sortedGroup, swapGroup };
export { toGroupKey };
