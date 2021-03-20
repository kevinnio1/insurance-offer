import styled from "styled-components";
import { theme } from "@styles/theme";
import { GenericLabel } from "@styles/generics";

export const FormInputStyle = styled.div`
    width: 100%;
    display:flex;
    flex-direction: column;
    margin-top: 20px;
`;

export const FormInputLabel = styled(GenericLabel)`
    text-align: left;
    margin: 0 70px 0px 0;
    font-size: 10px;
    font-weight: normal;
    color: ${theme.blueGrey};
`;

export const FormInputText = styled.input`
    height: 38px;
    margin: 10px 10px 5px 0;
    border: 0px solid #ffffff;
    border-bottom: 2px solid #317bda;
    font-family: 'Roboto';
`;