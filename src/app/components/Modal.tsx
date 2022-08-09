import { clearAllBodyScrollLocks, disableBodyScroll } from "body-scroll-lock";
import { cover, rgba } from "polished";
import React, { ReactNode, useRef } from "react";
import { X } from "react-feather";
import { useIntl } from "react-intl";
import ReactModal, { Props as ReactModalProps } from "react-modal";
import styled from "styled-components";

interface ReactModalAdapterProps extends ReactModalProps {
    children?: ReactNode;
    className?: string;
}

const ReactModalAdapter = ({ className, ...delegated }: ReactModalAdapterProps) => (
    <ReactModal portalClassName={className} className={`${className}__Content`} overlayClassName={`${className}__Overlay`} {...delegated} />
);

const ANIMATION_DURATION = 350;
const MAX_WIDTH = 720;

const StyledReactModal = styled(ReactModalAdapter).attrs({
    closeTimeoutMS: ANIMATION_DURATION
})`
    &__Overlay {
        display: grid;
        place-items: end center;

        ${cover()};
        z-index: 2;

        transition: background-color ${ANIMATION_DURATION}ms;

        @media (min-width: ${MAX_WIDTH}px) {
            place-items: center;
        }

        &.ReactModal__Overlay--after-open {
            transition-timing-function: ease-out;
            background-color: ${({ theme }) => rgba(theme.colors[theme.modal.overlay], 0.5)};
        }

        &.ReactModal__Overlay--before-close {
            transition-timing-function: ease-in;
            background-color: initial;
        }
    }

    &__Content {
        display: grid;
        position: relative;

        background: ${({ theme }) => theme.colors[theme.modal.background]};
        box-shadow: 0 0.5rem 2rem 0 rgba(0, 0, 0, 0.75);
        border-radius: 1rem 1rem 0 0;

        width: min(${MAX_WIDTH}px, 100vw);

        outline: none;
        overflow: hidden;

        transform: translateY(100%);
        opacity: 0;

        @media (min-width: ${MAX_WIDTH}px) {
            transform: translateY(calc(100% + (100vh - 100%) / 2));
            border-radius: 1rem;
        }

        transition: transform ${ANIMATION_DURATION}ms;

        @media (prefers-reduced-motion: reduce) {
            transition: opacity ${ANIMATION_DURATION}ms;
        }

        &.ReactModal__Content--after-open {
            transition-timing-function: ease-out;

            transform: translateY(0);
            opacity: 1;
        }

        &.ReactModal__Content--before-close {
            transition-timing-function: ease-in;

            transform: translateY(100%);

            @media (min-width: ${MAX_WIDTH}px) {
                transform: translateY(calc(100% + (100vh - 100%) / 2));
            }

            @media (prefers-reduced-motion: reduce) {
                opacity: 0;
                transform: translateY(0);
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
    max-height: calc(100vh - 3rem - env(safe-area-inset-top) - env(safe-area-inset-bottom));

    & > * {
        padding: 1rem;
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
