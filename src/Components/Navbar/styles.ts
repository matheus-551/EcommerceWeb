import styled from "styled-components"
import { theme } from './../../Themes/Theme';

export const Container = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    background: ${theme.colors.primary};
`;
export const TopNav = styled.div`
    width: 100%;
    height: 5rem;
    padding: 8px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background: '#05ffff';
`;
export const ContainerLogo = styled.div`
    width: 30%;
`;
export const Title = styled.h1`
    font-size: ${theme.fonts.titleSize};
    color: ${theme.colors.white};
`;

export const SearchBar = styled.input`
    width: 35%;
    padding: 4px;

    border: none;
    border-radius: 5px;
`;

export const ContainerButtons = styled.div`
    width: 30%;

    display: flex;
    justify-content: flex-end;
    align-items: center;
`
export const Button = styled.button`
    background: '#ffff';
`;

export const FooterNav = styled.div`
    width: 100%;
    height: 2rem;
    padding: 8px;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;

    background: ${theme.colors.secondary};
`;
export const NavLink = styled.a`
    padding: 4px;

    color: ${theme.colors.white};
    
    text-decoration: none;
`;