import React from "react"
import { FormLinkTextA } from "./formLinkTextStyle";

interface FormLinkTextProps {
    text: string;
    onClickLink: string;
}

export const FormLinkText: React.FC<FormLinkTextProps> = (props) => {
    const { text, onClickLink } = props;

    return (
        <FormLinkTextA href={onClickLink} rel="noopener noreferrer nofollow" target="_blank">
           {text}
        </FormLinkTextA>
    )
}