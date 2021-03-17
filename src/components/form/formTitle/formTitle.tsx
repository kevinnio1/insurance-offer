import React from "react"
import { FormTitleSpan } from "./formTitleStyle";

interface FormTitleProps {
    title: string;
}

export const FormTitle: React.FC<FormTitleProps> = (props) => {
    const { title } = props;

    return (
        <FormTitleSpan>
           {title}
        </FormTitleSpan>
    )
}