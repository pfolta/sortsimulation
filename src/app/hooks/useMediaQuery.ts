import { useEffect, useState } from "react";

const useMediaQuery = (mediaQueryString: string): boolean => {
    const mediaQuery = window.matchMedia(mediaQueryString);
    const [matches, setMatches] = useState(mediaQuery.matches);

    const listener = (event: MediaQueryListEvent) => setMatches(event.matches);

    useEffect(() => {
        mediaQuery.addEventListener("change", listener);
        return () => mediaQuery.removeEventListener("change", listener);
    }, [mediaQuery]);

    return matches;
};

export default useMediaQuery;
