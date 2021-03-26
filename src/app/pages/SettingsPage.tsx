import React from "react";
import { FormattedMessage } from "react-intl";

import { Heading, SubHeading } from "@/app/components/Typography";

const SettingsPage = (): JSX.Element => (
    <section>
        <Heading>
            <FormattedMessage id="settings" />
        </Heading>
        <SubHeading>
            <FormattedMessage id="preview" />
        </SubHeading>
    </section>
);

export default SettingsPage;
