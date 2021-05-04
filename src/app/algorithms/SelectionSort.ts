import { SortingAlgorithm } from "@/app/algorithms";
import { addToTrace, compareGroup, createTrace, minimumGroup, sortedGroup, swapGroup, Trace } from "@/app/trace";
import "@/app/utils/Array";
import "@/app/utils/ArrayConstructor";

const SelectionSort: SortingAlgorithm = {
    id: "selection_sort",

    sort: (array: number[]): Trace => {
        const trace = createTrace(array);

        for (let i = 0; i < array.length; i++) {
            let min = i;

            for (let j = i + 1; j < array.length; j++) {
                addToTrace(trace, array, undefined, [minimumGroup(min), compareGroup([j]), sortedGroup(Array.range(0, i))]);

                if (array[j] < array[min]) {
                    min = j;
                }
            }

            if (min != i) {
                array.swap(i, min);
                addToTrace(trace, array, undefined, [swapGroup([i, min]), sortedGroup(Array.range(0, i))]);
            }
        }

        addToTrace(trace, array, undefined, [sortedGroup(Array.range(array))]);

        return trace;
    }
};

export default SelectionSort;
