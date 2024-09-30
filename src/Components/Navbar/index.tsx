import {
    Container,
    TopNav,
    ContainerLogo,
    Title,
    ContainerSearch,
    SearchBar,
    SearchIcon,
    ContainerButtons,
    SectionUser,
    UserIcon,
    ContainerLinksUser,
    CartIcon,
    HeartIcon,
    FooterNav,
    NavLink
} from './styles';

import { Link } from 'react-router-dom';

export function Navbar() {
    return (
        <>
            <Container>
                <TopNav>
                    <ContainerLogo>
                        <Title>Ecommerce Falcão</Title>
                    </ContainerLogo>

                    <ContainerSearch>   
                        <SearchBar type='text' placeholder='O que você está procurando ?'/>
                        <SearchIcon size={25}/>
                    </ContainerSearch>

                    <ContainerButtons>
                        <SectionUser>
                            <UserIcon size={40}/>
                            <ContainerLinksUser>
                                <Link to='/login'>Entrar</Link> 
                                <Link to='/register'>Crie sua conta</Link>
                            </ContainerLinksUser>
                        </SectionUser>
                        <HeartIcon size={40}/>
                        <CartIcon size={40}/>
                    </ContainerButtons>
                </TopNav>

                <FooterNav>
                    <NavLink>Inicio</NavLink>
                    <NavLink>Departamentos</NavLink>
                    <NavLink>Todos os produtos</NavLink>
                    <NavLink>Produtos com desconto</NavLink>
                </FooterNav>
            </Container>
        </>
    )
}