import styled from "styled-components"
import { Search } from "@styled-icons/evil/Search";
import { Cart, Heart, User } from "styled-icons/evil";

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
`;
export const ContainerLogo = styled.div`
    width: 30%;
`;
export const Title = styled.h1`
    font-size: ${theme.fonts.titleSize};
    color: ${theme.colors.white};
`;

export const ContainerSearch = styled.div`
    width: 40%;
    display: flex;

    align-items: center;
    justify-content: center;
`;

export const SearchBar = styled.input`
    width: 100%;
    padding: 6px;

    border: none;
    border-radius: 10px;
`;

export const SearchIcon = styled(Search)`
    position: relative;
    left: -30px;
    
    z-index: 1;

    opacity: 0.8;
    color: ${theme.colors.black};

    &:hover {
        cursor: pointer;
    }
`;

export const ContainerButtons = styled.div`
    width: 30%;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    gap: 4px;
`

export const SectionUser = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;

    font-size: ${theme.fonts.smallSize};

    color: ${theme.colors.white};
`;

export const UserIcon = styled(User)`
    color: ${theme.colors.white};
    &:hover {
        cursor: pointer;
    }
`;

export const ContainerLinksUser = styled.div`
    display: flex;
    flex-direction: column;

    & > a {
        text-decoration: none;

        opacity: 0.8;
        color: ${theme.colors.white};

        &:hover {
            opacity: 1;
        }
    }
`;

export const CartIcon = styled(Cart)`
    color: ${theme.colors.white};
    &:hover {
        cursor: pointer;
    }
`;

export const HeartIcon = styled(Heart)`
    color: ${theme.colors.white};
    &:hover {
        cursor: pointer;
    }
`;

export const FooterNav = styled.div`
    width: 100%;
    height: 2.2rem;
    padding: 8px;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;

    background: ${theme.colors.secondary};
`;
export const NavLink = styled.a`
    padding: 10px;

    color: ${theme.colors.white};
    
    text-decoration: none;

    &:hover {
        font-weight: bolder;

        cursor: pointer;
        transition: ease-in-out;
        transform: scale(1.1);
    }
`;