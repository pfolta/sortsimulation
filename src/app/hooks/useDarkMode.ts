import { useEffect, useState } from "react";

const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

const useDarkMode = (): boolean => {
    const [isDarkMode, setDarkMode] = useState(darkModeMediaQuery.matches);

    const listener = (event: MediaQueryListEvent) => setDarkMode(event.matches);

    useEffect(() => {
        darkModeMediaQuery.addEventListener("change", listener);
        return () => darkModeMediaQuery.removeEventListener("change", listener);
    }, []);

    return isDarkMode;
};

export default useDarkMode;
