import React from "react";
import ROUND_CHECKBOX from "@assets/images/checked-no-label.svg";
import { FormCheckboxTextWrapper, FormCheckboxStyle, FormRoundCheckboxImage } from "@components/form/auth/formCheckbox/formCheckboxStyle";

interface FormCheckboxProps {
    text: string;
}

export const FormCheckbox: React.FC<FormCheckboxProps> = (props) => {
    const {text } = props;

    return (
        <FormCheckboxStyle>
            <FormRoundCheckboxImage src={ROUND_CHECKBOX} />
           <FormCheckboxTextWrapper>{text}</FormCheckboxTextWrapper>
        </FormCheckboxStyle>
    )
}