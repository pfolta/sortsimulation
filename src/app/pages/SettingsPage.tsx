import React from "react";
import { FormattedMessage } from "react-intl";

const SettingsPage = (): JSX.Element => (
    <section>
        <h2>
            <FormattedMessage id="settings" />
        </h2>
        <h3>
            <FormattedMessage id="preview" />
        </h3>
    </section>
);

export default SettingsPage;
