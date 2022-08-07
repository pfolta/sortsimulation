import React from "react";
import { FormattedDisplayName, FormattedMessage } from "react-intl";
import styled from "styled-components";

import { useDispatch, useSelector } from "@/app/hooks";
import { locales, Locale } from "@/app/locale";
import { LocaleProvider } from "@/app/providers";
import { setLocale } from "@/app/store";

const StyledFooter = styled.footer`
    background-color: #e5e9f0;
    color: #4c566a;

    font-size: 0.875rem;

    padding: 1rem calc(env(safe-area-inset-right) + 1rem) calc(env(safe-area-inset-bottom) + 1rem) calc(env(safe-area-inset-left) + 1rem);
`;

const Footer = (): JSX.Element => {
    const { locale } = useSelector((state) => state.settings);
    const dispatch = useDispatch();

    return (
        <StyledFooter>
            © Peter Folta. <FormattedMessage id="copyright.all_rights_reserved" />
            <br />
            <select value={locale} onChange={(event) => dispatch(setLocale(event.target.value as Locale))}>
                {Object.keys(locales).map((locale) => (
                    <option key={locale} value={locale}>
                        <LocaleProvider locale={locale as Locale}>
                            <FormattedDisplayName type="language" value={locale} />
                        </LocaleProvider>{" "}
                        - <FormattedDisplayName type="language" value={locale} />
                    </option>
                ))}
            </select>
        </StyledFooter>
    );
};

export default Footer;
