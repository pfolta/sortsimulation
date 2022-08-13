import { act, renderHook } from "@testing-library/react";
import { replaceRaf, RequestAnimationFrameStub } from "raf-stub";

import { useAnimationFrame } from "@/app/hooks";

declare const requestAnimationFrame: RequestAnimationFrameStub;

const startTime = performance.now();

describe("useAnimationFrame", () => {
    beforeAll(() => replaceRaf([window], { startTime }));
    beforeEach(() => requestAnimationFrame.reset());

    it("does not call the callback function when `playState` is `false`", () => {
        const callback = jest.fn();

        renderHook(() => useAnimationFrame(false, 0, callback));

        act(() => requestAnimationFrame.step());

        expect(callback).not.toHaveBeenCalled();
    });

    it("does not call the callback function if less time than the provided `delay` has passed", () => {
        const callback = jest.fn();
        const delay = 250;

        renderHook(() => useAnimationFrame(true, delay, callback, startTime));

        act(() => requestAnimationFrame.step(1, delay - 1));

        expect(callback).not.toHaveBeenCalled();
    });

    it("calls the callback function when at least `delay` amount of time has passed", () => {
        const callback = jest.fn();
        const delay = 125;

        renderHook(() => useAnimationFrame(true, delay, callback, startTime));

        act(() => requestAnimationFrame.step(1, delay + 1));

        expect(callback).toHaveBeenCalledTimes(1);
    });

    it("cancels the current animation frame on unmount", () => {
        const { unmount } = renderHook(() => useAnimationFrame(true, 0, jest.fn()));
        const cancelAnimationFrameSpy = jest.spyOn(window, "cancelAnimationFrame");

        expect(cancelAnimationFrameSpy).not.toHaveBeenCalled();

        unmount();

        expect(cancelAnimationFrameSpy).toHaveBeenCalledTimes(1);
    });
});
