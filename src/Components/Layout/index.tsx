import {
    Container,
    Wrapper
} from './styles';

import { Navbar } from '../Navbar';

export function Layout() {
    return (
        <>
            <Container>
                <Wrapper>
                    <Navbar/>
                    {/* <AppRoutes/> */}
                    {/* <Footer/> */}
                </Wrapper>
            </Container>
        </>
    )
}