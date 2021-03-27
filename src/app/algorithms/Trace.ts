import { Phase } from "@/app/algorithms";

interface TraceStep {
    array: number[];
    phase?: Phase;
}

const createTrace = (array: number[]): Trace => [
    {
        array: [...array]
    }
];

const addToTrace = (trace: Trace, array: number[], phase?: Phase): Trace => {
    trace.push({
        array: [...array],
        phase
    });

    return trace;
};

export { addToTrace, createTrace };
export type { TraceStep };
export type Trace = TraceStep[];
