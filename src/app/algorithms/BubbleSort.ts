import { addToTrace, Algorithm, createTrace, SortingAlgorithm, Trace } from "@/app/algorithms";
import "@/app/utils/Array";

const BubbleSort: SortingAlgorithm = {
    algorithm: Algorithm.BUBBLE_SORT,

    sort: (array: number[]): Trace => {
        const trace = createTrace(array);

        let swapped = false;
        let i = array.length - 1;

        do {
            swapped = false;

            for (let j = 0; j < i; j++) {
                addToTrace(trace, array);

                if (array[j] > array[j + 1]) {
                    array.swap(j, j + 1);
                    swapped = true;

                    addToTrace(trace, array);
                }
            }

            i = i - 1;
        } while (swapped);

        addToTrace(trace, array);

        return trace;
    }
};

export default BubbleSort;
