import React from "react";
import { render } from "react-dom";
import { setAppElement } from "react-modal";

import App from "@/app/App";

const appElement = document.querySelector("#app") as HTMLElement;

setAppElement(appElement);
render(<App />, appElement);
