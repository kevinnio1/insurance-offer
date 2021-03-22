import styled from "styled-components";
import BACKGROUND from "@assets/images/background-travel.svg";
import { GenericDiv } from "@styles/generics";

export const PlanStyle = styled.div`
    background-image: url(${BACKGROUND});
    background-repeat: no-repeat;
    background-size: 100%;
    min-height: 100vh;
    text-align: center;
    background-position-y: -200px;
`;

export const PlanTitle = styled(GenericDiv)`
    padding-top: 40px;
    font-family: 'Raleway';
    font-size: 26px;
    font-weight: bold;
    text-align: center;
    color: #ffffff;
`;

export const PlanWrapper = styled.div`
    display: flex;
    justify-content: center;
`;