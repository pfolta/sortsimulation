import { keyframes, Keyframes } from "styled-components";

const BackgroundFadeOut = (color: string): Keyframes => keyframes`
    from {
        background-color: ${color};
    }

    to {
        background-color: inherit;
    }
`;

export default BackgroundFadeOut;
