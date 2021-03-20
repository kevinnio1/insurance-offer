import styled from "styled-components";
import BITMAP from "@assets/images/bitmap@3x.png";

export const RequestPriceStyle = styled.div`
    min-height: 100vh;   
    background-image: linear-gradient(122deg, #317bda -6%, #33c3c8);
`;

export const BackgroundImage = styled.div`
    height:100%;
    width: 100%;
    background-image: url(${BITMAP});
    background-size:cover;
`;

export const DetailFormWrapper = styled.div`
    background-color: white;
    position: fixed;
    top:50%;
    left:50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    padding: 60px 222px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgba(72, 72, 72, 0.5);
`;

