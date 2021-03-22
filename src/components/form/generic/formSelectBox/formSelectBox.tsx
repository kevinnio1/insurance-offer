import React from "react"
import { FormSelectBoxStyle, FormSelectBoxLabel, FormSelectBoxSelect } from "@components/form/generic/formSelectBox/formSelectBoxStyle";

interface FormSelectBoxProps {
    value: string;
    label: string;
    options: string[];
    required: boolean;
    handler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormSelectBox: React.FC<FormSelectBoxProps> = (props) => {
    const {label, required, value, options } = props;

    return (
        <FormSelectBoxStyle>
            <FormSelectBoxLabel>{label}</FormSelectBoxLabel>
            <FormSelectBoxSelect value={value} required={required}>
                {options && options.map((option, index) => <option value={option} key={index}>{option}</option>)}
            </FormSelectBoxSelect>
        </FormSelectBoxStyle>
    )
}

