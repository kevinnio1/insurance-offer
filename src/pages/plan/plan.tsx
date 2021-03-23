import React, { useState } from "react";
import { PlanStyle, PlanTitle, PlanWrapper } from "@pages/plan/planStyle";
import { OptionSwitch } from "@components/generic/optionSwitch/optionSwitch";
import { LinkWithIcon } from "@components/generic/linkWithIcon/linkWithIcon";
import URLICON from "@assets/images/icon-comparison.svg";
import { CardPlan } from "@components/card/plan/cardPlan";
import { useLocation } from "react-router";
import { PlanState } from "./models/planState";
import { Redirect } from "react-router-dom";
import { LogoutLink } from "@components/generic/logoutLink/logoutLink";
import { getBelgianPrice } from "@utils/getBelgianPrice";

export const Plan: React.FC = () => {
    const location = useLocation();
    const locationState = location.state as PlanState;

    const [isGlobalSelected, setIsGlobalSelected] = useState(true);
    const [isMonthly, setIsMonthly] = useState(false);

    const getCorrectPrice = (price: number) => {
        if (isMonthly) {
            return getBelgianPrice(price/12, 2);
        } else {
            return getBelgianPrice(price, 2);
        }
    }

    if (locationState && locationState.globalPrice && locationState.universalPrice) {
        return (
            <PlanStyle>
                <LogoutLink />
                <PlanTitle>Select a plan</PlanTitle>
                <OptionSwitch
                    option1={"PAY MONTHLY"}
                    option2={"PAY YEARLY"}
                    handler={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setIsMonthly(!isMonthly);
                    }}
                    isOptionOne={isMonthly}
                />
                <PlanWrapper>
                    <CardPlan
                        title={"Global"}
                        price={getCorrectPrice(locationState.globalPrice)}
                        travelDuration={90}
                        medicalExpenses={1000000}
                        personalAssistanceAbroad={5000}
                        travelAssistanceAbroad={1000}
                        coverageDuration={"1 year"}
                        isSelected={isGlobalSelected}
                        setSelected={setIsGlobalSelected}
                    />
                    <CardPlan
                        title={"Universe"}
                        price={getCorrectPrice(locationState.universalPrice)}
                        travelDuration={180}
                        medicalExpenses={3000000}
                        personalAssistanceAbroad={10000}
                        travelAssistanceAbroad={25000}
                        coverageDuration={"1 year"}
                        isSelected={!isGlobalSelected}
                        setSelected={(bool: boolean) => setIsGlobalSelected(!bool)}
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
