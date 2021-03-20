import styled from "styled-components";
import { theme } from "@styles/theme"
import { GenericCenterSpan } from "@styles/generics";

interface CustomDivProps extends React.HTMLProps<HTMLDivElement>{
    isSelected?: boolean;
}

export const CardPlanStyle = styled.div<CustomDivProps>`
    margin: 8px;
    border-radius: 3px;
    box-shadow: 0 2px 4px 0 rgba(72, 72, 72, 0.5);
    background-color: ${props => props.isSelected ? "#31cfda" : "#ffffff" };
    color: ${props => props.isSelected ? "#ffffff" : theme.greyishBrown };
`;

export const CardRowWrapper = styled.div`
    padding: 19px;
`;

export const CardRowWrapperFlex = styled(CardRowWrapper)`
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
`;

export const CardTitle = styled(GenericCenterSpan)`
    font-size: 18px;
    font-weight: bold;
    text-align: center;
`;

export const CardPriceWrapper = styled.div<CustomDivProps>`
    display: flex;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.15);
    padding: 19px;
    color: ${props => props.isSelected ? "#ffffff" : "#31cfda" };
`;


export const CardPrice = styled(GenericCenterSpan)`
    font-size: 38px;
    font-weight: bold;
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: end;
    text-align: center;
    justify-content: center;
`;

export const CardPriceText = styled.span`
    font-size: 11px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 1px;
    text-align: center;
`;

export const CurrencySpan = styled(GenericCenterSpan)`
    font-size: 16px;
    font-weight: normal;
    text-align: center;
    margin-top: 4px;
`;

export const CardRowSpan = styled(GenericCenterSpan)`
    font-size: 12px;
    font-weight: 300;
`;

export const CardRowBoldText  =styled.b`

`;