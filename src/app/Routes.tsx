import React from "react";
import { useHistory, useLocation } from "react-router";

import Modal from "@/app/components/Modal";
import { AboutPage, HelpPage, SettingsPage } from "@/app/pages";

const Routes = (): JSX.Element => {
    const history = useHistory();
    const location = useLocation();

    const onClose = () => history.push("/");

    return (
        <>
            <Modal onClose={onClose} isOpen={location.pathname === "/about"}>
                <AboutPage />
            </Modal>
            <Modal onClose={onClose} isOpen={location.pathname === "/help"}>
                <HelpPage />
            </Modal>
            <Modal onClose={onClose} isOpen={location.pathname === "/settings"}>
                <SettingsPage />
            </Modal>
        </>
    );
};

export default Routes;
