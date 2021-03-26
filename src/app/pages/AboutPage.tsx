import React, { useState } from "react";
import { FormattedDate, FormattedTime, FormattedMessage } from "react-intl";

import { NumberArrayView } from "@/app/components/ArrayView";
import { ExternalLink } from "@/app/components/Link";
import { Heading, Paragraph } from "@/app/components/Typography";
import { useAnimationFrame } from "@/app/hooks";
import { palette } from "@/app/theme";
import "@/app/utils/Array";
import "@/app/utils/ArrayConstructor";

const AboutPage = (): JSX.Element => {
    const [array, setArray] = useState(Array.random(30));

    useAnimationFrame(true, 1000, () => setArray((array) => array.shuffled()));

    return (
        <section>
            <Heading>
                <FormattedMessage id="about" values={{ productName: "SortSimulation" }} />
            </Heading>
            <Paragraph>
                <FormattedMessage id="version" values={{ version: __VERSION__ }} /> ({__REVISION__})
                <br />
                <FormattedMessage id="copyright.all_rights_reserved" />
                <br />
                <FormattedDate value={__BUILD_DATE__} dateStyle="medium" />{" "}
                <FormattedTime
                    value={__BUILD_DATE__}
                    timeZone={__BUILD_TIMEZONE__}
                    timeZoneName="short"
                    hour="numeric"
                    minute="numeric"
                    second="numeric"
                />
            </Paragraph>
            <Paragraph>
                <ExternalLink href={__REPOSITORY_URL__}>GitHub</ExternalLink>,{" "}
                <ExternalLink href={__ISSUES_URL__}>GitHub Issues</ExternalLink>
            </Paragraph>
            <NumberArrayView array={array} colors={Array.range(array).map(() => [...palette].random())} />
        </section>
    );
};

export default AboutPage;
