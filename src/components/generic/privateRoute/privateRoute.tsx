import * as React from "react";
import { Redirect, Route, RouteProps } from "react-router";
import { useAuthContext } from "@hooks/useAuthContext";


const PrivateRouteComponent: React.FC<RouteProps> = ({
    component: Component,
    render,
    ...rest
}) => {
    const {
        authState: { isAuthenticated }
    } = useAuthContext();

    return (
        <Route
            {...rest}
            render={props => {
                if (isAuthenticated) {
                    if (Component) {
                        return <Component {...props} />;
                    } else if (render) {
                        return render(props);
                    }
                } else {
                    console.log("NOT AUTHENTICATED")
                }

                return (
                    <Redirect
                        to="/login"
                    />
                );
            }}
        />
    );
};

export const PrivateRoute = PrivateRouteComponent;
