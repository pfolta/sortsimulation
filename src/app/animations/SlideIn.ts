import { keyframes } from "styled-components";

const SlideIn = keyframes`
    from {
        transform: translateY(calc(100% + (100vh - 100%) / 2));
    }

    to {
        transform: translateY(0);
    }
`;

export default SlideIn;
