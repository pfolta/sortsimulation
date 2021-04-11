import { Trace } from "@/app/trace";

interface SortingAlgorithm {
    readonly id: string;
    readonly sort: (number: number[]) => Trace;
}

export default SortingAlgorithm;
