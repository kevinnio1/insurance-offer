import { useAuthContext } from "@hooks/useAuthContext";
import React from "react"
import { Button } from "../button/button"
import { LogoutLinkStyle } from "./logoutLinkStyle"

export const LogoutLink: React.FC = () => {
    const { logout } = useAuthContext();

    return (
        <LogoutLinkStyle>
            <Button
                text={"logout"}
                type="primary"
                onClick={() => logout()}
            />
        </LogoutLinkStyle>
    )
}

