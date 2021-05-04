import { SelectionSort } from "@/app/algorithms";
import { GroupId } from "@/app/trace";
import "@/app/utils/Array";

describe("Selection Sort", () => {
    describe("sort", () => {
        const array = [6, 5, 10, 9, 8, 4, 7, 3, 1, 2];

        it("returns a trace starting with the initial array", () => {
            const trace = SelectionSort.sort([...array]);
            expect(trace.first().array).toEqual(array);
        });

        it("returns a trace containing the correct array steps", () => {
            const trace = SelectionSort.sort([...array]);
            expect(trace.map((step) => step.array)).toMatchSnapshot();
        });

        it("returns a trace ending with the sorted array", () => {
            const trace = SelectionSort.sort([...array]);
            expect(trace.last().array.isSorted()).toBeTrue();
            expect(trace.last().groups.find((group) => group.id === GroupId.SORTED)?.indices).toIncludeAllMembers(Array.range(array));
        });
    });
});
