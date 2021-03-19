import styled from "styled-components";
import { theme } from "@styles/theme";


export const CardPlanStyle = styled.div`
    margin: 8px;
    border-radius: 3px;
    box-shadow: 0 2px 4px 0 rgba(72, 72, 72, 0.5);
    background-color: #31cfda;
`;

export const CardRowWrapper = styled.div`
    padding: 19px;
`;

export const CardTitle = styled.span`
    font-size: 18px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
    
`;

export const CardPriceWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.15);
    padding: 19px;
`;

export const CardPrice = styled.span`
    font-size: 38px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
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
    color: #ffffff;
`;

export const CurrencySpan = styled.span`
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
    margin-top: 4px;
`;

export const CardRowSpan = styled.span`
    font-size: 12px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
`;