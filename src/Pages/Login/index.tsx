import { useState } from "react";
import { 
    Container,
    ContainerLogo,
    Title,
    RegisterButton,
    ContainerForm,
    TitleForm,
    FormControl,
    Label,
    Input,
    VisibleIcon, 
    VisibleOffIcon,
    SubmitButton,
    ContainerLinks
} from "./styles";

function Login() {
    const [toggleViewPassword, setToggleViewPassword] = useState(false);
   
    function toggleVisiblePassword() {
        setToggleViewPassword((prevnState) => !prevnState)
    }

    return (
        <>
            <Container>
                <ContainerLogo>
                    <Title>Ainda não possui sua conta? </Title>
                    <RegisterButton>Criar agora</RegisterButton>
                </ContainerLogo>
                <ContainerForm>
                    <TitleForm>LOGIN</TitleForm>
                    
                    <FormControl>
                        <Label htmlFor="Email">Email: </Label>
                        <Input type="email" placeholder="email@email.com" />
                    </FormControl>
                    <FormControl>
                        <Label htmlFor="Password">Senha: </Label>
                        <Input type={(toggleViewPassword) ? 'text' : 'password'}/>
                    </FormControl>       
                    {
                        (toggleViewPassword)
                        ? 
                        <VisibleIcon onClick={() => toggleVisiblePassword()} size={25}/>
                        :
                        <VisibleOffIcon onClick={() => toggleVisiblePassword()} size={25}/>
                    }
                    <SubmitButton>Entrar</SubmitButton>

                    <ContainerLinks>
                        <a href="#">Esqueci minha senha</a>
                    </ContainerLinks>
                </ContainerForm>
            </Container>
        </>
    )
}

export default Login;