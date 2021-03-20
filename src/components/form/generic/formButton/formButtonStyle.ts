import styled from "styled-components";
import { theme } from "@styles/theme";
import { GenericButton, GenericLabel } from "@styles/generics";


export const FormButtonStyle = styled.div`
    width: 100%;
    display:flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    margin-bottom: 20px;
`;

export const FormButtonLabel = styled(GenericLabel)`
    text-align: left;
    font-size: 15px;
    font-weight: normal;
    color: ${theme.greyishBrown};
    width: 150px!important;
`;