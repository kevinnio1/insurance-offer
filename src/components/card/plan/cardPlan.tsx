import React from "react";
import { CardPlanStyle, CardPrice, CardPriceText, CardPriceWrapper, CardRowSpan, CardRowWrapper, CardTitle, CurrencySpan } from "@components/card/plan/cardPlanStyle";

interface CardPlanProps {
    title: string;
    price: number;
    travelDuration: number;
    medicalExpenses: number;
    personalAssistanceAbroad: number;
    travelAssistanceAbroad: number;
    coverageDuration: string;
    isSelected: boolean;
}

export const CardPlan: React.FC<CardPlanProps> = (props) => {
    const { title, price, travelDuration , medicalExpenses, personalAssistanceAbroad, travelAssistanceAbroad, coverageDuration, isSelected} = props;

    return (
        <CardPlanStyle>
            <CardRowWrapper>
                <CardTitle>{title}</CardTitle>
            </CardRowWrapper>
            <CardPriceWrapper>
                <CardPrice>
                    {price.toFixed(2).toString().replace(".", ",")} <CurrencySpan>€</CurrencySpan>
                </CardPrice>
                <CardPriceText>YEARLY INCL. TAXES</CardPriceText>
            </CardPriceWrapper>
            <CardRowWrapper>
                <CardRowSpan><b>Maximum duration travel</b> of <b>{travelDuration} days</b></CardRowSpan>
            </CardRowWrapper>
            <CardRowWrapper>
                <CardRowSpan><b>Medical expenses reimbursement</b> up to <b>{medicalExpenses.toLocaleString("nl-BE")} €</b></CardRowSpan>
            </CardRowWrapper>
            <CardRowWrapper>
                <CardRowSpan><b>Personal assistance abroad</b> up to <b>{personalAssistanceAbroad.toLocaleString("nl-BE")} €</b></CardRowSpan>
            </CardRowWrapper>
            <CardRowWrapper>
                <CardRowSpan><b>Travel assistance abroad</b> up to <b>{travelAssistanceAbroad.toLocaleString("nl-BE")} €</b> per insured per travel</CardRowSpan>
            </CardRowWrapper>
            <CardRowWrapper>
                <CardRowSpan><b>Coverage duration: {coverageDuration}</b></CardRowSpan>
            </CardRowWrapper>
        </CardPlanStyle>
    )
}