import { act, renderHook } from "@testing-library/react";
import { setMedia } from "mock-match-media";

import { useMediaQuery } from "@/app/hooks";

const mediaQuery = "(min-width: 60rem)";

describe("useMediaQuery", () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });

    it("returns `true` if media query matches", () => {
        setMedia({ width: "65rem" });

        const { result } = renderHook(() => useMediaQuery(mediaQuery));

        expect(result.current).toBeTrue();
    });

    it("returns `false` if media query does not match", () => {
        setMedia({ width: "59rem" });

        const { result } = renderHook(() => useMediaQuery(mediaQuery));

        expect(result.current).toBeFalse();
    });

    it("sets up an event listener and updates when media changes", () => {
        setMedia({ width: "59rem" });

        const { result } = renderHook(() => useMediaQuery(mediaQuery));

        expect(result.current).toBeFalse();

        act(() => setMedia({ width: "60rem" }));

        expect(result.current).toBeTrue();
    });
});
