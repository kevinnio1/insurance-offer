import React from "react"
import { FormInputStyle, FormInputLabel, FormInputText, FormInputLabelExtra, FormInputTextExtraWrapper } from "@components/form/generic/formInput/formInputStyle";

interface FormInputProps {
    value: string;
    label: string;
    type: string;
    required: boolean;
    extraLabel?: string;
    handler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormInput: React.FC<FormInputProps> = (props) => {
    const { label, type, required, extraLabel, value } = props;

    return (
        <FormInputStyle>
            <FormInputLabel>{label}</FormInputLabel>
            <FormInputTextExtraWrapper>
                <FormInputText type={type} required={required} value={value} />
                {extraLabel && <FormInputLabelExtra>{extraLabel}</FormInputLabelExtra>}
            </FormInputTextExtraWrapper>
        </FormInputStyle>
    )
}