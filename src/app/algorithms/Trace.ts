import { Group, Phase } from "@/app/algorithms";

interface TraceStep {
    readonly array: number[];
    readonly phase?: Phase;
    readonly groups: Group[];
}

const createTrace = (array: number[]): Trace => [
    {
        array: [...array],
        phase: undefined,
        groups: []
    }
];

const addToTrace = (trace: Trace, array: number[], phase: Phase | undefined, groups: Group[]): Trace => {
    trace.push({
        array: [...array],
        phase,
        groups: [...groups]
    });

    return trace;
};

export { addToTrace, createTrace };
export type { TraceStep };
export type Trace = TraceStep[];
