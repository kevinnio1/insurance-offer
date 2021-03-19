import React from "react"
import { FormTitleSpan } from "@components/form/auth/formTitle/formTitleStyle";

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