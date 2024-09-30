import styled from "styled-components";
import { theme } from "../../Themes/Theme";

import { Visibility } from "@styled-icons/material/Visibility";
import { VisibilityOff } from "@styled-icons/material/VisibilityOff";

export const Container = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContainerLogo = styled.div`
    width: 30%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;

    color: ${theme.colors.white};
    background-color: ${theme.colors.secondary};
`;

export const Title = styled.h1`
    font-size: ${theme.fonts.largeSize};
    color: ${theme.colors.white};
`;

export const RegisterButton = styled.a`
    width: 40%;
    height: 3rem;
    padding: 10;

    display: flex;
    justify-content: center;
    align-items: center;

    text-decoration: none;

    border: none;
    border-radius: 50px;

    color: ${theme.colors.black};
    background: ${theme.colors.white};

    &:hover {
        cursor: pointer;
        
        font-weight: bolder;

        border: 0.5px solid ${theme.colors.black};
    }
`;

export const ContainerForm = styled.div`
    width: 70%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

export const TitleForm = styled.h1`
    font-size: ${theme.fonts.largeSize};
    color: ${theme.colors.black};
`;

export const FormControl = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Label = styled.label`
    width: 30%;
    padding: 6px;

    text-align: start;
    font-weight: bold;
`;

export const Input = styled.input`
    width: 30%;
    padding: 10px;

    border-radius: 10px;
    border: 0.5px solid ${theme.colors.gray100};
`;

export const VisibleIcon = styled(Visibility)`
    position: relative;
    bottom: 40px;
    left: 150px;

    color: ${theme.colors.black};
`;

export const VisibleOffIcon = styled(VisibilityOff)`
    position: relative;
    bottom: 40px;
    left: 150px;

    color: ${theme.colors.black};
`;

export const SubmitButton = styled.button`
    width: 20%;
    height: 3rem;
    padding: 10;

    display: flex;
    justify-content: center;
    align-items: center;

    text-decoration: none;

    border: none;
    border-radius: 50px;

    color: ${theme.colors.white};
    background: ${theme.colors.secondary};

    &:hover {
        cursor: pointer;
        
        font-weight: bolder;

        border: 0.5px solid ${theme.colors.white};
    }
`;

export const ContainerLinks = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    & > a {
        color: ${theme.colors.gray500};

        &:hover {
            font-weight: bold;
            color: ${theme.colors.black};
        }
    }
`;
