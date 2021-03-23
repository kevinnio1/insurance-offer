import { InlineError } from "@components/generic/inlineError/inlineError";
import React from "react"
import { FormInlineErrorStyle } from "./formInlineErrorStyle";

interface FormInlineErrorProps {
    message: string;
}

export const FormInlineError: React.FC<FormInlineErrorProps> = (props) => {
    const { message } = props;

    return (
        <FormInlineErrorStyle>
           <InlineError>{message}</InlineError>
        </FormInlineErrorStyle>
    )
}