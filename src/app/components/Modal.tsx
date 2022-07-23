import { clearAllBodyScrollLocks, disableBodyScroll } from "body-scroll-lock";
import React, { ReactNode, useRef } from "react";
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
const MAX_WIDTH = 720;

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

        @media (min-width: ${MAX_WIDTH}px) {
            place-items: center;
        }

        &.ReactModal__Overlay--after-open {
            animation: ${({ theme }) => BackgroundFadeIn(`${theme.colors[theme.modal.overlay]}80`)} ${ANIMATION_DURATION}ms ease-out
                forwards;
        }

        &.ReactModal__Overlay--before-close {
            animation: ${({ theme }) => BackgroundFadeOut(`${theme.colors[theme.modal.overlay]}80`)} ${ANIMATION_DURATION}ms ease-in
                forwards;
        }
    }

    &__Content {
        display: grid;
        position: relative;

        background: ${({ theme }) => theme.colors[theme.modal.background]};
        box-shadow: 0 0.5rem 2rem 0 rgba(0, 0, 0, 0.75);
        border-radius: 1rem 1rem 0 0;

        width: min(${MAX_WIDTH}px, 100vw);
        max-height: calc(100vh - ${({ theme }) => theme.modal["margin-top"]});

        outline: none;
        overflow: hidden;

        /* Hack to prevent flicker */
        transform: translateY(100vh);

        @media (min-width: ${MAX_WIDTH}px) {
            border-radius: 1rem;
        }

        &.ReactModal__Content--after-open {
            animation: ${SlideIn("100%")} ${ANIMATION_DURATION}ms ease-out forwards;

            @media (min-width: ${MAX_WIDTH}px) {
                animation-name: ${SlideIn("calc(100% + (100vh - 100%) / 2)")};
            }
        }

        &.ReactModal__Content--before-close {
            animation: ${SlideOut("100%")} ${ANIMATION_DURATION}ms ease-in forwards;

            @media (min-width: ${MAX_WIDTH}px) {
                animation-name: ${SlideOut("calc(100% + (100vh - 100%) / 2)")};
            }
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

    background-color: ${({ theme }) => theme.colors[theme.modal.close.background]};
    color: ${({ theme }) => theme.colors[theme.modal.close.color]};

    border-radius: 0.25rem;

    :focus {
        box-shadow: ${({ theme }) => theme.focus.boxShadow};
    }

    :hover {
        background-color: ${({ theme }) => theme.colors[theme.modal.close.hover.background]};
        color: ${({ theme }) => theme.colors[theme.modal.close.hover.color]};
    }

    :active {
        background-color: ${({ theme }) => theme.colors[theme.modal.close.active.background]};
        color: ${({ theme }) => theme.colors[theme.modal.close.active.color]};
    }
`;

const StyledModalBody = styled.div`
    overflow: auto;
    max-height: calc(100vh - ${({ theme }) => theme.modal["margin-top"]});

    & > * {
        padding: ${({ theme }) => theme.modal.padding};
    }
`;

interface ModalProps {
    children?: ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

const Modal = ({ children, isOpen, onClose }: ModalProps): JSX.Element => {
    const intl = useIntl();
    const modalBodyRef = useRef<HTMLDivElement>(null);

    return (
        <StyledReactModal
            isOpen={isOpen}
            onRequestClose={onClose}
            onAfterOpen={() => disableBodyScroll(modalBodyRef.current as HTMLDivElement)}
            onAfterClose={clearAllBodyScrollLocks}
        >
            <CloseButton title={intl.formatMessage({ id: "close" })} onClick={onClose}>
                <X size={20} />
            </CloseButton>
            <StyledModalBody ref={modalBodyRef}>{children}</StyledModalBody>
        </StyledReactModal>
    );
};

export default Modal;
