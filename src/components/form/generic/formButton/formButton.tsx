import React from "react";
import { FormButtonSubmit, FormButtonLabel, FormButtonStyle } from "@components/form/generic/formButton/formButtonStyle";

interface FormButtonProps {
    text: string;
    label?: string;
    onSubmit: React.MouseEventHandler<HTMLButtonElement>;
}

export const FormButton: React.FC<FormButtonProps> = (props) => {
    const { text, onSubmit, label } = props;

    return (
        <FormButtonStyle>
            <FormButtonLabel>{label}</FormButtonLabel>
            <FormButtonSubmit onClick={onSubmit}>
                {text}
            </FormButtonSubmit>
        </FormButtonStyle>
    )
}