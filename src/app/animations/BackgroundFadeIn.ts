import { keyframes, Keyframes } from "styled-components";

const BackgroundFadeIn = (color: string): Keyframes => keyframes`
    from {
        background-color: inherit;
    }

    to {
        background-color: ${color};
    }
`;

export default BackgroundFadeIn;
