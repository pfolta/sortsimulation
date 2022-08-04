import { useMediaQuery } from "@/app/hooks";

const useDarkMode = () => useMediaQuery("(prefers-color-scheme: dark)");

export default useDarkMode;
