import React, { useState } from "react";
import { FormattedDate, FormattedTime, FormattedMessage } from "react-intl";

import { NumberArrayView } from "@/app/components/ArrayView";
import ExternalLink from "@/app/components/ExternalLink";
import "@/app/utils/ArrayConstructor";

const AboutPage = (): JSX.Element => {
    const [array] = useState(Array.random(30));

    return (
        <section>
            <h2>
                <FormattedMessage id="about" values={{ productName: "SortSimulation" }} />
            </h2>
            <p>
                <FormattedMessage id="version" values={{ version: __VERSION__ }} /> ({__REVISION__})
            </p>
            <p>
                <FormattedMessage id="copyright.all_rights_reserved" />
            </p>
            <p>
                <FormattedDate value={__BUILD_DATE__} dateStyle="medium" />{" "}
                <FormattedTime
                    value={__BUILD_DATE__}
                    timeZone={__BUILD_TIMEZONE__}
                    timeZoneName="short"
                    hour="numeric"
                    minute="numeric"
                    second="numeric"
                />
            </p>
            <p>
                <ExternalLink href={__REPOSITORY_URL__}>GitHub</ExternalLink>,{" "}
                <ExternalLink href={__ISSUES_URL__}>GitHub Issues</ExternalLink>
            </p>
            <NumberArrayView array={array} />
        </section>
    );
};

export default AboutPage;
