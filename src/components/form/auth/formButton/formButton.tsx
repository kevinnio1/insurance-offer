import React from "react";
import { FormButtonSubmit } from "@components/form/auth/formButton/formButtonStyle";

interface FormButtonProps {
    text: string;
}

export const FormButton: React.FC<FormButtonProps> = (props) => {
    const { text } = props;

    return (
        <FormButtonSubmit type="submit">
            {text}
        </FormButtonSubmit>
    )
}