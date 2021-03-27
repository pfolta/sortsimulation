import { Trace } from "@/app/algorithms";

interface SortingAlgorithm {
    readonly id: string;
    readonly sort: (number: number[]) => Trace;
}

export default SortingAlgorithm;
