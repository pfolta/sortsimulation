import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Modal from "@/app/components/Modal";
import { AboutPage, HelpPage, SettingsPage } from "@/app/pages";

const Routes = (): JSX.Element => {
    const location = useLocation();
    const navigate = useNavigate();

    const onClose = () => navigate("/");

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
