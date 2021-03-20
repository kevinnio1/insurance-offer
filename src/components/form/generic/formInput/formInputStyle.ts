import styled from "styled-components";
import { theme } from "@styles/theme";
import { GenericLabel } from "@styles/generics";

export const FormInputStyle = styled.div`
    width: 100%;
    display:flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    margin-bottom: 20px;
`;

export const FormInputLabel = styled(GenericLabel)`
    text-align: left;
    font-size: 15px;
    font-weight: normal;
    color: ${theme.greyishBrown};
    width: 150px;
`;

export const FormInputText = styled.input`
    width: 60px;
    height: 40px;
    border: 1px solid rgba(72, 72, 72, 0.2);
    border-radius: 2px;
    padding-left: 10px;
`;

export const FormInputLabelExtra = styled(FormInputLabel) `
    margin-left: 10px;
`;

export const FormInputTextExtraWrapper = styled.div`

`;