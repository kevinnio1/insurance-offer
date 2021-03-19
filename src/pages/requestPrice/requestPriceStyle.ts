import styled from "styled-components";
import BITMAP from "@assets/images/bitmap@3x.png";

export const RequestPriceStyle = styled.div`
    height: 100vh;   
    // background: linear-gradient(122deg, rgba(49,123,218,0.6), rgba(51,195,200,0.6)), url(${BITMAP});
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

