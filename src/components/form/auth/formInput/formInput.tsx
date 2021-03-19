import React from "react"
import { FormInputStyle, FormInputLabel, FormInputText } from "@components/form/auth/formInput/formInputStyle";

interface FormInputProps {
    value: string;
    label: string;
    type: string;
    required: boolean;
    handler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormInput: React.FC<FormInputProps> = (props) => {
    const {label, type, required, value } = props;

    return (
        <FormInputStyle>
            <FormInputLabel>{label}</FormInputLabel>
            <FormInputText type={type} required={required} value={value}/>
        </FormInputStyle>
    )
}