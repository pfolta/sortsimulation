import BubbleSort from "@/app/algorithms/BubbleSort";
import { compare, swap } from "@/app/algorithms/Phase";
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
            expect(JSON.stringify(trace.map((traceStep) => traceStep.array))).toMatchSnapshot();
        });

        it("returns a trace starting and ending with no phase", () => {
            const trace = BubbleSort.sort([...array]);
            expect(trace[0].phase).toBeUndefined();
            expect(trace[trace.length - 1].phase).toBeUndefined();
        });

        it("returns a trace where every intermediate step is either `compare` or `swap`", () => {
            const trace = BubbleSort.sort([...array]);

            trace
                .slice(1, trace.length - 1)
                .map((step) => step.phase)
                .forEach((phase) => expect(phase).toBeOneOf([compare, swap]));
        });

        it("returns a trace ending with the sorted array", () => {
            const trace = BubbleSort.sort([...array]);
            expect(trace[trace.length - 1].array.isSorted()).toBe(true);
        });
    });
});
