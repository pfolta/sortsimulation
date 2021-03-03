import { addToTrace, createTrace } from "@/app/algorithms/Trace";
import { swap } from "@/app/utils/array";

describe("Trace", () => {
    describe("createTrace", () => {
        it("returns a trace starting with the initial array", () => {
            const array = [2, 1, 3, 4];
            const trace = createTrace(array);

            expect(trace).toHaveLength(1);
            expect(trace[0].array).toEqual(array);
        });

        it("creates an immutable copy of the initial array", () => {
            const array = [2, 1, 3, 4];
            const trace = createTrace(array);

            // Mutate the array
            swap(array, 0, 1);

            expect(trace[0].array).not.toEqual(array);
        });
    });

    describe("addToTrace", () => {
        it("adds the current array to the trace", () => {
            const array = [2, 1, 3, 4];
            const trace = createTrace(array);

            // Mutate the array
            swap(array, 2, 3);

            addToTrace(trace, array);

            expect(trace).toHaveLength(2);
            expect(trace[trace.length - 1].array).toEqual(array);
        });

        it("adds an immutable copy of the array to the trace", () => {
            const array = [2, 1, 3, 4];
            const trace = createTrace(array);

            // Mutate the array
            swap(array, 2, 3);

            addToTrace(trace, array);

            // Mutate the array again
            swap(array, 1, 3);

            expect(trace).toHaveLength(2);
            expect(trace[trace.length - 1].array).not.toEqual(array);
        });
    });
});
