import React, { ReactNode } from "react";
import { Provider } from "react-redux";

import { store } from "@/app/store";

interface StoreProviderProps {
    children?: ReactNode;
}

const StoreProvider = ({ children }: StoreProviderProps): JSX.Element => <Provider store={store}>{children}</Provider>;

export default StoreProvider;
