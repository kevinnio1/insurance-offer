import React from "react";
import { FormButtonSubmit } from "./formButtonStyle";

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