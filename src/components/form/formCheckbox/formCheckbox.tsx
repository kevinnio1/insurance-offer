import React from "react";
import ROUND_CHECKBOX from "@assets/images/checked-no-label.svg";
import { FormCheckboxTextWrapper, FormCheckboxWrapper, FormRoundCheckboxImage } from "./formCheckboxStyle";

interface FormCheckboxProps {
    text: string;
}

export const FormCheckbox: React.FC<FormCheckboxProps> = (props) => {
    const {text } = props;

    return (
        <FormCheckboxWrapper>
            <FormRoundCheckboxImage src={ROUND_CHECKBOX} />
           <FormCheckboxTextWrapper>{text}</FormCheckboxTextWrapper>
        </FormCheckboxWrapper>
    )
}