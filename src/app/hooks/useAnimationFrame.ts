import { useCallback, useLayoutEffect, useRef } from "react";

/**
 * Calls the given `callback` function in a `requestAnimationFrame` loop
 *
 * @param playState controls whether the animation loop should run
 * @param delay minimum frame duration in ms for before the next animation tick can occur
 * @param callback function to call when an animation frame occurs
 * @param startTime (optional, for testing) used to synchronize clocks
 */
const useAnimationFrame = (playState: boolean, delay: number, callback: (delta: number) => void, startTime = performance.now()): void => {
    const requestRef = useRef<number>();
    const previousTimeRef = useRef(startTime);

    const animate = useCallback(
        (time: number) => {
            const delta = time - previousTimeRef.current;

            if (delta >= delay) {
                callback(delta);
                previousTimeRef.current = time;
            }

            requestRef.current = requestAnimationFrame(animate);
        },
        [callback, delay]
    );

    useLayoutEffect(() => {
        if (playState) {
            requestRef.current = requestAnimationFrame(animate);
        }

        return () => {
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
            }
        };
    }, [playState, delay, animate]);
};

export default useAnimationFrame;
