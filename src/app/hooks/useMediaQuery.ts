import { useEffect, useState } from "react";

const useMediaQuery = (mediaQueryString: string): boolean => {
    const mediaQuery = window.matchMedia(mediaQueryString);
    const [isMediaQueryState, setMediaQueryState] = useState(mediaQuery.matches);

    const listener = (event: MediaQueryListEvent) => setMediaQueryState(event.matches);

    useEffect(() => {
        mediaQuery.addEventListener("change", listener);
        return () => mediaQuery.removeEventListener("change", listener);
    }, [mediaQuery]);

    return isMediaQueryState;
};

export default useMediaQuery;
