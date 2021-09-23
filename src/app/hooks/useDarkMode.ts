import useMediaQuery from "@/app/hooks/useMediaQuery";

const darkModeMediaQueryString = "(prefers-color-scheme: dark)";

const useDarkMode = (): boolean => useMediaQuery(darkModeMediaQueryString);

export default useDarkMode;
