import { compareGroup, sortedGroup, toGroupKey } from "@/app/trace";

describe("Group", () => {
    describe("toGroupKey", () => {
        it("returns exactly one GroupKey for every Group", () => {
            const groups = [compareGroup([0, 1]), compareGroup([4, 5]), sortedGroup([8, 9])];
            expect(toGroupKey(groups)).toHaveLength(2);
        });
    });
});
