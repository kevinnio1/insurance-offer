import React from "react";
import { PlanStyle, PlanTitle, PlanWrapper } from "@pages/plan/planStyle";
import { FormOptionSwitch } from "@components/form/generic/formOptionSwitch/formOptionSwitch";
import { LinkWithIcon } from "@components/generic/linkWithIcon/linkWithIcon";
import URLICON from "@assets/images/icon-comparison.svg";
import { CardPlan } from "@components/card/plan/cardPlan";
import { useLocation } from "react-router";
import { PlanState } from "./models/planState";
import { Redirect } from "react-router-dom";

export const Plan: React.FC = () => {
    const location = useLocation();
    const locationState = location.state as PlanState;

    if (locationState && locationState.globalPrice && locationState.universalPrice) {
        return (
            <PlanStyle>
                <PlanTitle>Select a plan</PlanTitle>
                <FormOptionSwitch
                    option1={"PAY MONTHLY"}
                    option2={"PAY YEARLY"}
                    handler={() => null}
                    isOptionOne={false}
                />
                <PlanWrapper>
                    <CardPlan
                        title={"Global"}
                        price={locationState.globalPrice}
                        travelDuration={90}
                        medicalExpenses={1000000}
                        personalAssistanceAbroad={5000}
                        travelAssistanceAbroad={1000}
                        coverageDuration={"1 year"}
                        isSelected={true}
                    />
                    <CardPlan
                        title={"Universe"}
                        price={locationState.universalPrice}
                        travelDuration={180}
                        medicalExpenses={3000000}
                        personalAssistanceAbroad={10000}
                        travelAssistanceAbroad={25000}
                        coverageDuration={"1 year"}
                        isSelected={false}
                    />
                </PlanWrapper>
                <LinkWithIcon
                    iconUrl={URLICON}
                    text={"Show me the full comparison table"}
                    url={"#"}
                />
            </PlanStyle>
        )

    } else {
        return <Redirect to="/" />
    }
}
