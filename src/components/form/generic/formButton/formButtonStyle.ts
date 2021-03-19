import styled from "styled-components";
import { theme } from "@styles/theme";


export const FormButtonStyle = styled.div`
    width: 100%;
    display:flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    margin-bottom: 20px;
`;



export const FormButtonSubmit = styled.button`
    height: 45px;
    padding: 14px 50.5px 14px 50.5px;
    border-radius: 3px;
    border: solid 1px #ffffff;
    background-color: #31cfda;
    font-size: 14px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
    margin-bottom: 20px;

    a {
        color: white;
        &:hover {
            color: #317bda;
        }
    }

    &:hover {
        border-color: #31cfda;
        cursor: pointer;
    }

`;


export const FormButtonLabel = styled.label`
    text-align: left;
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: ${theme.greyishBrown};
    width: 150px!important;
`;