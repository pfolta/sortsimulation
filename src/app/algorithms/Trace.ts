interface TraceStep {
    array: number[];
}

type Trace = TraceStep[];

const createTrace = (array: number[]): Trace => [
    {
        array: [...array]
    }
];

const addToTrace = (trace: Trace, array: number[]): Trace => {
    trace.push({
        array: [...array]
    });

    return trace;
};

export { Trace, TraceStep };
export { addToTrace, createTrace };
