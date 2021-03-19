import styled from "styled-components";
import { theme } from "@styles/theme";
import SELECT_CHEVRON from "@assets/images/icon-dropdown.svg";

export const FormSelectBoxStyle = styled.div`
    width: 100%;
    display:flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    margin-bottom: 20px;
`;

export const FormSelectBoxLabel = styled.label`
    text-align: left;
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: ${theme.greyishBrown};
    width: 150px;
`;

export const FormSelectBoxSelect = styled.select`
    height: 40px;
    width: 324px;
    border-radius: 2px;
    border: 1px solid rgba(72, 72, 72, 0.2);
    padding-left:10px;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: url(${SELECT_CHEVRON});
    background-repeat: no-repeat;
    background-position-x: calc(100% - 10px);
    background-position-y: 15px;
    cursor: pointer;
`;
