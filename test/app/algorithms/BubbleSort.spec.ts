import BubbleSort from "@/app/algorithms/BubbleSort";
import "@/app/utils/Array";

describe("Bubble Sort", () => {
    describe("sort", () => {
        const array = [6, 5, 10, 9, 8, 4, 7, 3, 1, 2];

        it("returns a trace starting with the initial array", () => {
            const trace = BubbleSort.sort([...array]);
            expect(trace[0].array).toEqual(array);
        });

        it("returns a trace containing the correct intermediate array steps", () => {
            const trace = BubbleSort.sort([...array]);
            expect(trace.map((step) => step.array)).toMatchSnapshot();
        });

        it("returns a trace containing the correct phases", () => {
            const trace = BubbleSort.sort([...array]);
            expect(trace.map((step) => step.phase?.key)).toMatchSnapshot();
        });

        it("returns a trace ending with the sorted array", () => {
            const trace = BubbleSort.sort([...array]);
            expect(trace[trace.length - 1].array.isSorted()).toBe(true);
        });
    });
});
