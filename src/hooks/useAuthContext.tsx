import React, { useContext, useState, useCallback, useMemo, useRef } from "react";
import { AuthService } from "@utils/auth/authService";
import { AccessToken } from "@utils/auth/accessToken";

interface Token extends AccessToken {
    email: string;
}

export interface AuthContextState {
    isAuthenticated: boolean;
    user?: Token;
}

export interface AuthContextStateProps {
    authState: AuthContextState;
    login(token: string): void;
    logout(): void;
}

export const AuthContext = React.createContext<AuthContextStateProps>({
    authState: {
        isAuthenticated: false
    },
    login(_) {
        throw new Error("Not implemented");
    },
    logout() {
        throw new Error("Not implemented");
    }
});

export const useAuthContext = () => useContext(AuthContext);


export const AuthProvider: React.FC = ({ children }) => {

    const decodedToken = useRef(AuthService.getDecodedToken<Token>());

    const [authState, setAuthState] = useState<AuthContextState>({ isAuthenticated: !!decodedToken.current, user: decodedToken.current });

    const login = useCallback((token: string) => {
        const user = AuthService.getDecodedToken<Token>(token);

        if (token) {
            AuthService.storeJwt(token);
        }

        setAuthState({
            isAuthenticated: true,
            user
        });
    }, [setAuthState]);

    const logout = useCallback(() => {
        AuthService.logout();

        setAuthState({
            isAuthenticated: false,
            user: undefined
        });
    }, []);

    const value = useMemo(() => (
        {
            authState,
            login,
            logout
        }
    ), [login, logout, authState]);

    return (
        <AuthContext.Provider
            value={value}>
            {children}
        </AuthContext.Provider>
    );
};