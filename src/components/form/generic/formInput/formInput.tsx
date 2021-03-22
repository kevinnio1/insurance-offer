import React from "react"
import { FormInputStyle, FormInputLabel, FormInputText, FormInputLabelExtra, FormInputTextExtraWrapper, ErrorSpan, FormInputTextExtraInnerWrapper } from "@components/form/generic/formInput/formInputStyle";

interface FormInputProps {
    value: string;
    label: string;
    type: string;
    required: boolean;
    extraLabel?: string;
    hasError?: boolean;
    errorMessage?: string;
    handler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormInput: React.FC<FormInputProps> = (props) => {
    const { label, type, required, extraLabel, value, handler, hasError, errorMessage } = props;

    return (
        <FormInputStyle>
            <FormInputLabel>{label}</FormInputLabel>
            <FormInputTextExtraWrapper>
                <FormInputTextExtraInnerWrapper>
                    <FormInputText hasError={hasError} type={type} required={required} value={value} onChange={handler} />
                    {extraLabel && <FormInputLabelExtra hasError={hasError}>{extraLabel}</FormInputLabelExtra>}
                </FormInputTextExtraInnerWrapper>
                {hasError && <ErrorSpan>{errorMessage}</ErrorSpan>}
            </FormInputTextExtraWrapper>
        </FormInputStyle>
    )
}