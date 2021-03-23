import React from "react"
import { FormSelectBoxStyle, FormSelectBoxLabel, FormSelectBoxSelect } from "@components/form/generic/formSelectBox/formSelectBoxStyle";

interface FormSelectBoxProps {
    value: string;
    label: string;
    options: string[];
    required: boolean;
    handler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const FormSelectBox: React.FC<FormSelectBoxProps> = (props) => {
    const {label, required, value, options, handler } = props;

    return (
        <FormSelectBoxStyle>
            <FormSelectBoxLabel>{label}</FormSelectBoxLabel>
            <FormSelectBoxSelect value={value} required={required} onChange={handler}>
                {options && options.map((option, index) => <option value={option} key={index}>{option}</option>)}
            </FormSelectBoxSelect>
        </FormSelectBoxStyle>
    )
}

