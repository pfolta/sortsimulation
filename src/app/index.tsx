import React from "react";
import { createRoot } from "react-dom/client";
import { setAppElement } from "react-modal";

import App from "@/app/App";

const container = document.querySelector("#app") as HTMLElement;
const root = createRoot(container);

setAppElement(container);
root.render(<App />);
