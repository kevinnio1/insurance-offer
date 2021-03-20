import styled from "styled-components";
import { theme } from "@styles/theme";
import { GenericSpan } from "@styles/generics";

export const FormCheckboxStyle = styled.div`
    display:flex;
    align-items: center;
`;

export const FormRoundCheckboxImage = styled.img`

`;

export const FormCheckboxTextWrapper = styled(GenericSpan)`
    font-size: 12px;
    font-weight: normal;
    color: ${theme.blueGrey};
    margin-left: 7px;
`;