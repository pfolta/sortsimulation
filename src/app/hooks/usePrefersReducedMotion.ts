import useMediaQuery from "@/app/hooks/useMediaQuery";

const prefersReducedMotionMediaQueryString = "(prefers-reduced-motion: reduce)";

const usePrefersReducedMotion = (): boolean => useMediaQuery(prefersReducedMotionMediaQueryString);

export default usePrefersReducedMotion;
