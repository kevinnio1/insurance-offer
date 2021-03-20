import React from "react";
import { CardPlanStyle, CardPrice, CardPriceText, CardPriceWrapper, CardRowBoldText, CardRowSpan, CardRowWrapper, CardRowWrapperFlex, CardTitle, CurrencySpan } from "@components/card/plan/cardPlanStyle";
import { Button } from "@components/generic/button/button";
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

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
    const { title, price, travelDuration, medicalExpenses, personalAssistanceAbroad, travelAssistanceAbroad, coverageDuration, isSelected } = props;

    return (
        <CardPlanStyle isSelected={isSelected}>
            <CardRowWrapper>
                <CardTitle>{title}</CardTitle>
            </CardRowWrapper>
            <CardPriceWrapper isSelected={isSelected}>
                <CardPrice>
                    {price.toFixed(2).toString().replace(".", ",")} <CurrencySpan>€</CurrencySpan>
                </CardPrice>
                <CardPriceText>YEARLY INCL. TAXES</CardPriceText>
            </CardPriceWrapper>
            <CardRowWrapper>
                <CardRowSpan><CardRowBoldText>Maximum duration travel</CardRowBoldText> of <CardRowBoldText>{travelDuration} days</CardRowBoldText></CardRowSpan>
            </CardRowWrapper>
            <CardRowWrapper>
                <CardRowSpan><CardRowBoldText>Medical expenses reimbursement</CardRowBoldText> up to <CardRowBoldText>{medicalExpenses.toLocaleString("nl-BE")} €</CardRowBoldText></CardRowSpan>
            </CardRowWrapper>
            <CardRowWrapper>
                <CardRowSpan><CardRowBoldText>Personal assistance abroad</CardRowBoldText> up to <CardRowBoldText>{personalAssistanceAbroad.toLocaleString("nl-BE")} €</CardRowBoldText></CardRowSpan>
            </CardRowWrapper>
            <CardRowWrapper>
                <CardRowSpan><CardRowBoldText>Travel assistance abroad</CardRowBoldText> up to <CardRowBoldText>{travelAssistanceAbroad.toLocaleString("nl-BE")} €</CardRowBoldText> per insured per travel</CardRowSpan>
            </CardRowWrapper>
            <CardRowWrapper>
                <CardRowSpan><CardRowBoldText>Coverage duration: {coverageDuration}</CardRowBoldText></CardRowSpan>
            </CardRowWrapper>
            <CardRowWrapperFlex>
                    {isSelected ? (
                        <Button
                            text="Plan selected"
                            type="default"
                            fontAwesomeIcon={faCheckCircle}
                            onClick={() => null}
                            fullWidth
                        />
                    ) : (
                        <Button
                            text="Choose this plan"
                            type="primary"
                            onClick={() => null}
                            fullWidth
                        />
                    )}
            </CardRowWrapperFlex>
        </CardPlanStyle>
    )
}