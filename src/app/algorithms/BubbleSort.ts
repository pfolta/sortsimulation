import { addToTrace, compare, createTrace, SortingAlgorithm, swap, Trace } from "@/app/algorithms";
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
            const sorted = Array.range(i + 1, array.length);

            for (let j = 0; j < i; j++) {
                addToTrace(trace, array, compare, sorted);

                if (array[j] > array[j + 1]) {
                    array.swap(j, j + 1);
                    swapped = true;

                    addToTrace(trace, array, swap, sorted);
                }
            }

            i = i - 1;
        } while (swapped);

        addToTrace(trace, array, undefined, Array.range(array));

        return trace;
    }
};

export default BubbleSort;
