import { TypedUseSelectorHook, useDispatch as useReduxDispatch, useSelector as useReduxSelector } from "react-redux";

import { AppDispatch, RootState } from "@/app/store";

export const useDispatch = (): AppDispatch => useReduxDispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export { default as useAnimationFrame } from "@/app/hooks/useAnimationFrame";
export { default as useDarkMode } from "@/app/hooks/useDarkMode";
