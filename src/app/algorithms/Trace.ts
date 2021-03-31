import { Phase } from "@/app/algorithms";

interface TraceStep {
    readonly array: number[];
    readonly phase?: Phase;
    readonly sorted: number[];
}

const createTrace = (array: number[]): Trace => [
    {
        array: [...array],
        phase: undefined,
        sorted: []
    }
];

const addToTrace = (trace: Trace, array: number[], phase: Phase | undefined, sorted: number[]): Trace => {
    trace.push({
        array: [...array],
        phase,
        sorted: [...sorted]
    });

    return trace;
};

export { addToTrace, createTrace };
export type { TraceStep };
export type Trace = TraceStep[];
