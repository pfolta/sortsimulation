import { keyframes, Keyframes } from "styled-components";

const SlideOut = (offScreenTransform: string): Keyframes => keyframes`
    from {
        transform: translateY(0);
    }

    to {
        transform: translateY(${offScreenTransform});
    }
`;

export default SlideOut;
