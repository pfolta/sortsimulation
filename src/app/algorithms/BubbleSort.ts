import { SortingAlgorithm } from "@/app/algorithms";
import { addToTrace, compare, compareGroup, createTrace, sortedGroup, swap, swapGroup, Trace } from "@/app/trace";
import "@/app/utils/Array";
import "@/app/utils/ArrayConstructor";

const BubbleSort: SortingAlgorithm = {
    id: "bubble_sort",

    sort: (array: number[]): Trace => {
        const trace = createTrace(array);

        let swapped = false;
        let i = array.length - 1;

        do {
            swapped = false;
            const sorted = sortedGroup(Array.range(i + 1, array.length));

            for (let j = 0; j < i; j++) {
                addToTrace(trace, array, compare, [compareGroup([j, j + 1]), sorted]);

                if (array[j] > array[j + 1]) {
                    array.swap(j, j + 1);
                    swapped = true;

                    addToTrace(trace, array, swap, [swapGroup([j, j + 1]), sorted]);
                }
            }

            i = i - 1;
        } while (swapped);

        addToTrace(trace, array, undefined, [sortedGroup(Array.range(array))]);

        return trace;
    }
};

export default BubbleSort;
