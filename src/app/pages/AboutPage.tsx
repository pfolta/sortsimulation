import React, { useState } from "react";
import { FormattedMessage } from "react-intl";

import { NumberArrayView } from "@/app/components/ArrayView";

const AboutPage = (): JSX.Element => {
    const [array] = useState(Array.random(30));

    return (
        <section>
            <h2>
                <FormattedMessage id="about" values={{ productName: "SortSimulation" }} />
            </h2>
            <NumberArrayView array={array} />
        </section>
    );
};

export default AboutPage;
