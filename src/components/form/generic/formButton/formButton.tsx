import React from "react";
import { FormButtonLabel, FormButtonStyle } from "@components/form/generic/formButton/formButtonStyle";
import { Button } from "@components/generic/button/button";

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
            <Button
                text="Get a price"
                type="primary"
                onClick={onSubmit}
            />
        </FormButtonStyle>
    )
}