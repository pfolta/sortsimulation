import { useLayoutEffect, useRef } from "react";

const useAnimationFrame = (playState: boolean, delay: number, callback: (delta: number) => void): void => {
    const requestRef = useRef<number>();
    const previousTimeRef = useRef(performance.now());

    const animate = (time: number) => {
        const delta = time - previousTimeRef.current;

        if (delta >= delay) {
            callback(delta);
            previousTimeRef.current = time;
        }

        requestRef.current = requestAnimationFrame(animate);
    };

    useLayoutEffect(
        () => {
            if (playState) {
                requestRef.current = requestAnimationFrame(animate);
            }

            return () => {
                if (requestRef.current) {
                    cancelAnimationFrame(requestRef.current);
                }
            };
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [playState, delay]
    );
};

export default useAnimationFrame;
