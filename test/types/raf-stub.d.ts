declare module "raf-stub" {
    export interface RequestAnimationFrameStub {
        add: (cb: (time?: number) => void) => number;
        remove: (id: number) => void;
        flush: (duration?: number) => void;
        reset: () => void;
        step: (steps?: number, duration?: number) => void;
    }

    export interface ReplaceRafOptions {
        frameDuration?: number;
        startTime?: number;
    }

    export const replaceRaf: (roots?: Array<typeof globalThis>, options?: ReplaceRafOptions) => void;
}
