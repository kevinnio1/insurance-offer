import React from "react";
import { ButtonB, ButtonTextSpan, FaIcon } from "@components/generic/button/buttonStyle";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface ButtonProps {
    text: string;
    type: string;
    icon?: string;
    fontAwesomeIcon?: IconDefinition;
    fullWidth?: boolean;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<ButtonProps> = (props) => {
    const { text, onClick, type, icon, fontAwesomeIcon, fullWidth } = props;

    return (
        <ButtonB onClick={onClick} customType={type} fullWidth={fullWidth}>
            {icon && <img src={icon} />}
            {fontAwesomeIcon && <FaIcon icon={fontAwesomeIcon} />}
            <ButtonTextSpan>{text}</ButtonTextSpan>
        </ButtonB>
    )
}