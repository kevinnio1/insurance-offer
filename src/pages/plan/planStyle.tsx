import styled from "styled-components";
import BACKGROUND from "@assets/images/background-travel.svg";
import { theme } from "@styles/theme";

export const PlanStyle = styled.div`
    background-image: url(${BACKGROUND});
    background-repeat: no-repeat;
    background-size: 100%;
    min-height: 100vh;
    text-align: center;
`;

export const PlanTitle = styled.div`
    padding-top: 40px;
    font-family: 'Raleway';
    font-size: 26px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
`;

export const PlanWrapper = styled.div`
    display: flex;
    justify-content: center;
`;