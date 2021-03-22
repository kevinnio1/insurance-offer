import styled from "styled-components";
import { theme } from "@styles/theme";
import { GenericLabel, GenericSpan } from "@styles/generics";

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

interface ErrorInputProps extends React.HTMLProps<HTMLInputElement>{
    hasError?: boolean;
}
export const FormInputText = styled.input<ErrorInputProps>`
    width: 60px;
    height: 40px;
    border: ${props => props.hasError ? "1px solid #ee3d57": "1px solid rgba(72, 72, 72, 0.2)"};
    color: ${props => props.hasError ? "#ee3d57" : theme.greyishBrown}
    border-radius: 2px;
    padding-left: 10px;
`;

interface ErrorLabelProps extends React.HTMLProps<HTMLLabelElement>{
    hasError?: boolean;
}
export const FormInputLabelExtra = styled(FormInputLabel)<ErrorLabelProps>`
    margin-left: 10px;
    color: ${props => props.hasError ? "#ee3d57" : theme.greyishBrown}
`;

export const FormInputTextExtraWrapper = styled.div`

`;

export const ErrorSpan = styled(GenericSpan)`
    font-size: 15px;
    font-weight: 500;
    color: #ee3d57;
`;

export const FormInputTextExtraInnerWrapper = styled.div`
    margin-bottom: 10px;
`;