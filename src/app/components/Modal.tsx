import React, { ReactNode } from "react";
import { X } from "react-feather";
import { useIntl } from "react-intl";
import ReactModal, { Props as ReactModalProps } from "react-modal";
import styled from "styled-components";

import { BackgroundFadeIn, BackgroundFadeOut, SlideIn, SlideOut } from "@/app/animations";

interface ReactModalAdapterProps extends ReactModalProps {
    children?: ReactNode;
    className?: string;
}

const ReactModalAdapter = ({ className, ...delegated }: ReactModalAdapterProps) => (
    <ReactModal portalClassName={className} className={`${className}__Content`} overlayClassName={`${className}__Overlay`} {...delegated} />
);

const ANIMATION_DURATION = 250;

const StyledReactModal = styled(ReactModalAdapter).attrs({
    closeTimeoutMS: ANIMATION_DURATION
})`
    &__Overlay {
        display: grid;
        place-items: end center;

        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 2;

        @media (min-width: ${({ theme }) => theme.modal.maxWidth}) {
            place-items: center;
        }

        &.ReactModal__Overlay--after-open {
            animation: ${({ theme }) => BackgroundFadeIn(theme.modal.background)} ${ANIMATION_DURATION}ms ease-out forwards;
        }

        &.ReactModal__Overlay--before-close {
            animation: ${({ theme }) => BackgroundFadeOut(theme.modal.background)} ${ANIMATION_DURATION}ms ease-in forwards;
        }
    }

    &__Content {
        display: grid;
        position: relative;

        background: ${({ theme }) => theme.body.background};
        box-shadow: 0 0.5rem 2rem 0 rgba(0, 0, 0, 0.75);
        border-radius: 0.5rem 0.5rem 0 0;

        width: min(${({ theme }) => theme.modal.maxWidth}, 100vw);
        max-height: calc(100vh - ${({ theme }) => theme.modal.marginTop});

        outline: none;
        overflow: hidden;

        @media (min-width: ${({ theme }) => theme.modal.maxWidth}) {
            border-radius: 0.5rem;
        }

        & > * {
            padding: ${({ theme }) => theme.modal.padding};
            overflow: auto;
            max-height: calc(100vh - ${({ theme }) => theme.modal.marginTop} - 2 * ${({ theme }) => theme.modal.padding});
        }

        &.ReactModal__Content--after-open {
            animation: ${SlideIn} ${ANIMATION_DURATION}ms ease-out forwards;
        }

        &.ReactModal__Content--before-close {
            animation: ${SlideOut} ${ANIMATION_DURATION}ms ease-in forwards;
        }
    }
`;

const CloseButton = styled.button`
    all: unset;

    display: grid;
    padding: 0.25rem;

    position: absolute;
    top: 1rem;
    right: 1rem;

    background-color: ${({ theme }) => theme.colors.gray5};
    color: ${({ theme }) => theme.colors.gray3};

    border-radius: 0.25rem;

    :focus {
        box-shadow: ${({ theme }) => theme.focus.boxShadow};
    }

    :hover {
        color: ${({ theme }) => theme.colors.gray1};
    }

    :active {
        background-color: ${({ theme }) => theme.colors.gray4};
    }
`;

interface ModalProps {
    children?: ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

const Modal = ({ children, onClose, isOpen }: ModalProps): JSX.Element => {
    const intl = useIntl();

    const disableBodyScroll = () => (document.body.style.overflow = "hidden");
    const enableBodyScroll = () => (document.body.style.overflow = "unset");

    return (
        <StyledReactModal isOpen={isOpen} onRequestClose={onClose} onAfterOpen={disableBodyScroll} onAfterClose={enableBodyScroll}>
            <CloseButton title={intl.formatMessage({ id: "close" })} onClick={onClose}>
                <X size="1.25rem" />
            </CloseButton>
            {children}
        </StyledReactModal>
    );
};

export default Modal;
