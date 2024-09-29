import {
    Container,
    TopNav,
    ContainerLogo,
    Title,
    SearchBar,
    ContainerButtons,
    Button,
    FooterNav,
    NavLink
} from './styles';

export function Navbar() {
    return (
        <>
            <Container>
                <TopNav>
                    <ContainerLogo>
                        <Title>Ecommerce Falcão</Title>
                    </ContainerLogo>

                    <SearchBar type='search' placeholder='O que você está procurando ?'/>

                    <ContainerButtons>
                        <Button>Login</Button>
                        <Button>Registrar-se</Button>
                    </ContainerButtons>
                </TopNav>

                <FooterNav>
                    <NavLink>Home</NavLink>
                    <NavLink>Home</NavLink>
                    <NavLink>Home</NavLink>
                    <NavLink>Home</NavLink>
                    <NavLink>Home</NavLink>
                    <NavLink>Home</NavLink>
                    <NavLink>Home</NavLink>
                </FooterNav>
            </Container>
        </>
    )
}