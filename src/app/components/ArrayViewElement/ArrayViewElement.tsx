import styled from "styled-components";

interface ArrayViewElementProps {
    value: number;
}

const ArrayViewElement = styled.div
    .withConfig({
        shouldForwardProp: (prop) => ["children", "data-value", "style"].includes(prop)
    })
    .attrs<ArrayViewElementProps>(({ value }) => ({
        "data-value": value
    }))<ArrayViewElementProps>`
        transition: transform 100ms ease-out;
        will-change: transform;

        @media (prefers-reduced-motion: no-preference) {
            :hover {
                transform: translateY(-1rem);

                /* Prevent jitter on hover, see https://codepen.io/csilverman/post/fixing-the-jitter-bug */
                ::before {
                    content: "";

                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: -1rem;

                    z-index: -1;
                }
            }
        }
`;

export default ArrayViewElement;
export { ArrayViewElementProps };
