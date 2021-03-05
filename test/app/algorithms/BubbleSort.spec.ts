import BubbleSort from "@/app/algorithms/BubbleSort";
import { isSorted } from "@/app/utils/array";

describe("Bubble Sort", () => {
    describe("sort", () => {
        it("returns a trace starting with the initial array", () => {
            const array = [6, 5, 10, 9, 8, 4, 7, 3, 1, 2];
            const trace = BubbleSort.sort([...array]);
            expect(trace[0].array).toEqual(array);
        });

        it("returns a trace containing the correct intermediate array steps", () => {
            const array = [6, 5, 10, 9, 8, 4, 7, 3, 1, 2];
            const trace = BubbleSort.sort(array);
            expect(JSON.stringify(trace.map((traceStep) => traceStep.array))).toMatchSnapshot();
        });

        it("returns a trace ending with the sorted array", () => {
            const array = [6, 5, 10, 9, 8, 4, 7, 3, 1, 2];
            const trace = BubbleSort.sort(array);
            expect(isSorted(trace[trace.length - 1].array)).toBe(true);
        });
    });
});
