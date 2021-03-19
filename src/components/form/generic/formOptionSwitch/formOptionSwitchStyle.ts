import styled from "styled-components";
import { theme } from "@styles/theme";

export const FormOptionSwitchStyle = styled.div`
    margin-top: 48px;
`;

export const FormSwitch = styled.label`
    position: relative;
    display: inline-block;
    width: 50px;
    height: 30px;
`;

export const CheckboxInput = styled.input`
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + .slider:before {
        -webkit-transform: translateX(20px);
        -ms-transform: translateX(20px);
        transform: translateX(20px);
    }
`;

export const RoundSliderSpan = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${theme.white20};
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 20px;

    &:before {
        position: absolute;
        content: "";
        height: 22px;
        width: 22px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
        border-radius: 50%;
    }
`;

export const FormSwitchWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const FormSwitchLabel = styled.label`
    margin: 0px 10px;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 1.08px;
    text-align: right;
    color: #ffffff;
`;