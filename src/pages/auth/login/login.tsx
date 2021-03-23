import React, { useState } from "react";
import Q_Logo from "@assets/images/logo_white.svg";
import { Center, Footer, FooterText, ImageWrapper, LeftWhiteArrow, LoginStyle, BigLogo, TopBanner, TopBannerLink, FromLoginWrapper, ButtonTransparent, FormLogin, FormTitleWrapper, FormLoginItems, FormExtraWrapper } from "@pages/auth/login/loginStyle";
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FormTitle } from "@components/form/auth/formTitle/formTitle";
import { FormInput } from "@components/form/auth/formInput/formInput";
import { FormCheckbox } from "@components/form/auth/formCheckbox/formCheckbox";
import { FormLinkText } from "@components/form/auth/formLinkText/formLinkText";
import { FormButton } from "@components/form/auth/formButton/formButton";
import { useAuthContext } from "@hooks/useAuthContext";
import { Redirect } from "react-router-dom";
import { AuthApiService } from "@api/auth/auth";


export const Login: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const {
        authState: { isAuthenticated },
        login
    } = useAuthContext();

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setPassword(e.target.value);
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const res = await AuthApiService.login({ email, password });
        if (res.access_token) {
            login(res.access_token);
        }
    }

    if (isAuthenticated) {
        return <Redirect to="/" />
    }

    return (
        <LoginStyle>
            <TopBanner>
                <LeftWhiteArrow icon={faChevronLeft} />
                <TopBannerLink><a href="http://qover.me/" target="_blank" rel="noopener noreferrer nofollow">QOVER.ME</a></TopBannerLink>
            </TopBanner>
            <Center>
                <ImageWrapper>
                    <BigLogo src={Q_Logo} />
                </ImageWrapper>
                <FromLoginWrapper>
                    <FormLogin onSubmit={handleSubmit}>
                        <FormLoginItems>
                            <FormTitleWrapper>
                                <FormTitle title="Welcome at Qover" />
                            </FormTitleWrapper>
                            <FormInput
                                value={email}
                                label="Email"
                                type="email"
                                required
                                handler={handleEmailChange}
                            />
                            <FormInput
                                value={password}
                                label="Password"
                                type="password"
                                required
                                handler={handlePasswordChange}
                            />
                            <FormExtraWrapper>
                                <FormCheckbox text={"Remember me"}/>
                                <FormLinkText text={"Forgot your password?"} onClickLink="#" />
                            </FormExtraWrapper>

                            <FormButton 
                                text={"Sign in to your account"}
                            />

                        </FormLoginItems>
                    </FormLogin>
                    <ButtonTransparent>Don't have an account? <a href="#" target="_blank" rel="noopener noreferrer nofollow">Aks access</a></ButtonTransparent>
                </FromLoginWrapper>
            </Center>
            <Footer>
                <FooterText>© Qover {(new Date()).getFullYear()}</FooterText>
            </Footer>
        </LoginStyle>
    )
}