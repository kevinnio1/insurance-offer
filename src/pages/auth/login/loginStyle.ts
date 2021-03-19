import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const LoginStyle = styled.div`
    width: 100%;
    min-height: 100vh;
    background-image: linear-gradient(122deg, #317bda -6%, #33c3c8);
`;

export const TopBanner = styled.div`
    display: flex;
    height: 16px;
    padding: 4px 1040px 10px 98px;
    background-color: rgba(255,255,255,.12);
    align-items: baseline;
`;

export const LeftWhiteArrow = styled(FontAwesomeIcon)`
    color: #ffffff;
    margin: 6px 4px 0px 0px;
    font-size: 9px;
`;

export const TopBannerLink = styled.div`

    a {
        font-size: 9px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: 0.75px;
        color: #ffffff;
        text-decoration: none;
        margin-bottom: 20px;
        padding-bottom: 20px;
    }
`;

export const Footer = styled.div`
    bottom: 0px;
    text-align: center;
    position: absolute;
    height: 49px;
    width: 100%;
    border-top: 1px solid rgba(255,255,255,.12);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const FooterText = styled.span`
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.42;
    letter-spacing: normal;
    color: #ffffff;
`;

export const Center = styled.div`
    text-align: center;
`;

export const ImageWrapper = styled.div`
    margin-top: 60px;
`;

export const BigLogo = styled.img`
    height: 100px;
    user-drag: none; 
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
`;

export const FromLoginWrapper = styled.div`
    width: 350px;
    margin: 0 auto;
    text-align: center;
`;

export const ButtonTransparent = styled.button`
    width: 100%;
    height: 45px;
    margin: 20px 0 0;
    padding: 14px 50.5px 14px 50.5px;
    border-radius: 3px;
    border: solid 1px #ffffff;
    background: rgba(255,255,255,0);
    font-size: 14px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;

    a {
        color: white;
        &:hover {
            color: #317bda;
        }
    }

    &:hover {
        border-color: #317bda;
        cursor: pointer;
    }

`;

export const FormLogin = styled.form`
    width: 100%;
    margin: 30px 0 20px;
    padding: 30px 0px 0px;
    border-radius: 3px;
    box-shadow: 0 2px 2px 0 #d4dce2;
    background-color: #ffffff;
    display: flex;
`;

export const FormTitleWrapper = styled.div`
    width: 100%;
    text-align: center;
`;

export const FormLoginItems = styled.div`
    width:100%;
    padding: 0px 20px 0px 20px;
`;

export const FormExtraWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 22px;
    margin-bottom: 15px;
`;