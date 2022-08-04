import { renderHook } from "@testing-library/react";
import { setMedia } from "mock-match-media";

import { usePrefersReducedMotion } from "@/app/hooks";

describe("usePrefersReducedMotion", () => {
    it("returns `true` if the user prefers reduced motion", () => {
        setMedia({ "prefers-reduced-motion": "reduce" });

        const { result } = renderHook(() => usePrefersReducedMotion());

        expect(result.current).toBeTrue();
    });

    it("returns `false` if the user has not expressed a preference", () => {
        setMedia({ "prefers-reduced-motion": "no-preference" });

        const { result } = renderHook(() => usePrefersReducedMotion());

        expect(result.current).toBeFalse();
    });
});
