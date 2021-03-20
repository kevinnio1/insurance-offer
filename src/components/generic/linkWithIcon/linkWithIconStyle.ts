import { GenericA } from "@styles/generics";
import styled from "styled-components";

export const LinkWithIconStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 30px;
`;

export const LinkWithIconA = styled(GenericA)`
    font-size: 14px;
    font-weight: bold;
    color: #31cfda;
`;

export const UrlIcon = styled.img`
    color: #31cfda; 
    margin-left: 11px;
    width: 17px;
    height: 15px;
`;