import React, { ReactNode } from "react";
import { Props } from "react-modal";

const ReactModal = ({ children, id, isOpen }: Props & { children?: ReactNode }): JSX.Element => <div id={id}>{isOpen && children}</div>;

export default ReactModal;
