import React from "react"
import { FormInputWrapper, FormInputLabel, FormInputText } from "./formInputStyle";

interface FormInputProps {
    value: string;
    label: string;
    type: string;
    required: boolean;
    handler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormInput: React.FC<FormInputProps> = (props) => {
    const {label, type, required } = props;

    return (
        <FormInputWrapper>
            <FormInputLabel>{label}</FormInputLabel>
            <FormInputText type={type} required={required} />
        </FormInputWrapper>
    )
}