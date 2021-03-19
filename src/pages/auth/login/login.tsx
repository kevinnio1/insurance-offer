import React from "react";
import Q_Logo from "@assets/images/logo_white.svg";
import { Center, Footer, FooterText, ImageWrapper, LeftWhiteArrow, LoginStyle, BigLogo, TopBanner, TopBannerLink, FromLoginWrapper, ButtonTransparent, FormLogin, FormTitleWrapper, FormLoginItems, FormExtraWrapper } from "@pages/auth/login/loginStyle";
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FormTitle } from "@components/form/auth/formTitle/formTitle";
import { FormInput } from "@components/form/auth/formInput/formInput";
import { FormCheckbox } from "@components/form/auth/formCheckbox/formCheckbox";
import { FormLinkText } from "@components/form/auth/formLinkText/formLinkText";
import { FormButton } from "@components/form/auth/formButton/formButton";


export const Login: React.FC = () => {

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
                    <FormLogin>
                        <FormLoginItems>
                            <FormTitleWrapper>
                                <FormTitle title="Welcome at Qover" />
                            </FormTitleWrapper>
                            <FormInput
                                value={""}
                                label="Email"
                                type="email"
                                required
                                handler={() => null}
                            />
                            <FormInput
                                value={""}
                                label="Password"
                                type="password"
                                required
                                handler={() => null}
                            />
                            <FormExtraWrapper>
                                <FormCheckbox text={"Remember me"}/>
                                <FormLinkText text={"Forgot your password?"} onClickLink="#" />
                            </FormExtraWrapper>

                            <FormButton 
                                text={"Sign in to your account"}
                                onSubmit={()=>null}
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