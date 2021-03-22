import { keyframes } from "styled-components";

const SlideOut = keyframes`
    from {
        transform: translateY(0);
    }

    to {
        transform: translateY(calc(100% + (100vh - 100%) / 2));
    }
`;

export default SlideOut;
