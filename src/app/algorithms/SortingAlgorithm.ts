import { Trace } from "@/app/algorithms";

enum Algorithm {
    BUBBLE_SORT = "BUBBLE_SORT"
}

interface SortingAlgorithm {
    algorithm: Algorithm;
    sort: (number: number[]) => Trace;
}

export default SortingAlgorithm;
export { Algorithm };
