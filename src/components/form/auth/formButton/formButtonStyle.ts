import { GenericButton } from "@styles/generics";
import styled from "styled-components";

export const FormButtonSubmit = styled(GenericButton)`
    width: 100%;
    height: 45px;
    margin: 20px 0 0;
    padding: 14px 50.5px 14px 50.5px;
    border-radius: 3px;
    border: solid 1px #ffffff;
    background-color: #317bda;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    color: #ffffff;
    margin-bottom: 20px;

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