import { useMediaQuery } from "@/app/hooks";

const usePrefersReducedMotion = () => useMediaQuery("(prefers-reduced-motion: reduce)");

export default usePrefersReducedMotion;
