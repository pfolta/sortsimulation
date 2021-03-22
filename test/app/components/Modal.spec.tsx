import React from "react";

import renderWithProviders from "../../utils/renderWithProviders";

import Modal from "@/app/components/Modal";

describe("Modal", () => {
    it("renders correctly", () => {
        const component = renderWithProviders(<Modal onClose={jest.fn} isOpen={true} />);
        expect(component.toJSON()).toMatchSnapshot();
    });

    it("renders the modal content if the modal is opened", () => {
        const content = <section>This is the modal content.</section>;

        const component = renderWithProviders(
            <Modal onClose={jest.fn} isOpen={true}>
                {content}
            </Modal>
        );

        expect(component.toJSON()).toMatchSnapshot();

        const modalContent = component.root.findByType("section");
        expect(modalContent).toBeDefined();
        expect(modalContent.children[0]).toBe("This is the modal content.");
    });

    it("does not render the modal content if the modal is closed", () => {
        const content = <section>This is the modal content.</section>;

        const component = renderWithProviders(
            <Modal onClose={jest.fn} isOpen={false}>
                {content}
            </Modal>
        );

        expect(component.toJSON()).toMatchSnapshot();
        expect(() => component.root.findByType("section")).toThrow(Error);
    });

    it("clicking the 'X' button triggers the `onClose` function", () => {
        const onCloseMock = jest.fn();

        const component = renderWithProviders(<Modal onClose={onCloseMock} isOpen={true} />);

        const closeButton = component.root.findByType("button");
        expect(closeButton).toBeDefined();

        closeButton.props.onClick();
        expect(onCloseMock).toHaveBeenCalledTimes(1);
    });
});
