import styled, { StyledFunction } from "styled-components";
import { theme } from "@styles/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GenericButton } from "@styles/generics";


interface CustomButtonProps extends React.HTMLProps<HTMLButtonElement>{
    customType: string;
    fullWidth?: boolean;
}

export const ButtonB = styled(GenericButton)<CustomButtonProps>`
    background-color: ${props => props.customType === "primary" ? "#31cfda":  "#ffffff"};
    color: ${props => props.customType === "primary" ? "#ffffff":  "#31cfda"};
    width: ${props => props.fullWidth ? "100%":  "fit-content"};
    border: ${props => props.customType === "primary" ? "solid 1px #31cfda":  "solid 1px #ffffff"};
    display: flex;
    align-items: center;
    justify-content: center;

    height: 45px;
    padding: 14px 50.5px 14px 50.5px;
    border-radius: 3px;
    font-size: 14px;
    font-weight: bold;
 
    text-align: center;

    a {
        color: white;
        &:hover {
            color: #317bda;
        }
    }

    &:hover {
        border-width: 2px;
        cursor: pointer;
    }

`;

export const FaIcon = styled(FontAwesomeIcon)`
    font-size: 20px;
    margin-right: 10px;
`;

export const ButtonTextSpan = styled.span`

`;