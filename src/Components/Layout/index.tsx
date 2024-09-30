import {
    Container,
    Wrapper
} from './styles';

import AppRoutes from '../../AppRoutes';

export function Layout() {
    return (
        <>
            <Container>
                <Wrapper>
                    <AppRoutes/>
                    {/* <Footer/> */}
                </Wrapper>
            </Container>
        </>
    )
}