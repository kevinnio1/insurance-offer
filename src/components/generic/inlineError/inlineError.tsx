import React from "react";
import { InlineErrorSpan } from "./inlineErrorStyle";


export const InlineError: React.FC = ({ children }) => {

    return (
        <InlineErrorSpan>
            {children}
        </InlineErrorSpan>
    )
} 