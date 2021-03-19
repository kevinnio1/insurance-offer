import React from "react";
import { FormButtonSubmit } from "@components/form/auth/formButton/formButtonStyle";

interface FormButtonProps {
    text: string;
    onSubmit:  React.MouseEventHandler<HTMLButtonElement>;
}

export const FormButton: React.FC<FormButtonProps> = (props) => {
    const {text, onSubmit } = props;

    return (
        <FormButtonSubmit onClick={onSubmit}>
            {text}
        </FormButtonSubmit>
    )
}