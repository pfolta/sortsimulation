import { renderHook } from "@testing-library/react";
import { setMedia } from "mock-match-media";

import { useDarkMode } from "@/app/hooks";

describe("useDarkMode", () => {
    it("returns `true` if the user prefers a dark themed interface", () => {
        setMedia({ "prefers-color-scheme": "dark" });

        const { result } = renderHook(() => useDarkMode());

        expect(result.current).toBeTrue();
    });

    it("returns `false` if the user prefers a light themed interface", () => {
        setMedia({ "prefers-color-scheme": "light" });

        const { result } = renderHook(() => useDarkMode());

        expect(result.current).toBeFalse();
    });

    it("returns `false` if the user has not expressed a preference", () => {
        setMedia({ "prefers-color-scheme": "no-preference" });

        const { result } = renderHook(() => useDarkMode());

        expect(result.current).toBeFalse();
    });
});
