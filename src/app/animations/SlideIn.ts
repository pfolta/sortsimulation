import { keyframes, Keyframes } from "styled-components";

const SlideIn = (offScreenTransform: string): Keyframes => keyframes`
    from {
        transform: translateY(${offScreenTransform});
    }

    to {
        transform: translateY(0);
    }
`;

export default SlideIn;
