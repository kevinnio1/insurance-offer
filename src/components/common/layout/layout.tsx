import React from "react";
import { LayoutStyle } from "./layoutStyle";

export const Layout: React.FC = ({ children }) => {

    return (
        <LayoutStyle>
            {/*Using this patter to allow add a nav bar if needed later*/}
            {children}
        </LayoutStyle>
    )
} 