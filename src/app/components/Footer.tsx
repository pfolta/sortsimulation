import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";

import { useDispatch, useSelector } from "@/app/hooks";
import { locales, Locale } from "@/app/locale";
import { setLocale } from "@/app/store";

const StyledFooter = styled.footer`
    background-color: #e5e9f0;
    color: #4c566a;

    font-size: 0.875rem;

    padding: 1rem;
`;

const Footer = (): JSX.Element => {
    const { locale } = useSelector((state) => state.settings);
    const dispatch = useDispatch();

    return (
        <StyledFooter>
            © Peter Folta. <FormattedMessage id="copyright.all_rights_reserved" />
            <br />
            <select value={locale} onChange={(event) => dispatch(setLocale(event.target.value as Locale))}>
                {Object.entries(locales)
                    .sort()
                    .map(([localeKey, localeData]) => (
                        <option key={localeKey} value={localeKey}>
                            {localeData.language}
                        </option>
                    ))}
            </select>
        </StyledFooter>
    );
};

export default Footer;
