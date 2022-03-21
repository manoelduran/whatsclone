import React from 'react';
import LogoImage from '../../assets/logo.png';
import LockImage from '../../assets/lock.png';
import {
    Container,
    Logo,
    Name,
    EncryptContainer,
    Icon,
    EncryptText,
    LoginButton
} from './styles';
import { useNavigate } from 'react-router-dom';
import { FacebookAuthProvider } from 'firebase/auth';
import { auth } from '../../services/firebase';
import { useAuth } from '../../hooks/AuthContext';


export function Splash() {
    const navigate = useNavigate();
    const { signInWithFacebook, user } = useAuth();
    async function handleSignInWithFacebook(user: User) {
        const provider = new FacebookAuthProvider();
        await signInWithFacebook(auth, provider);
        navigate(`/${user.email}`);
    };

    return (
        <Container>
            <Logo src={LogoImage} />
            <Name>Manubas App</Name>
            <EncryptContainer>
                <Icon src={LockImage} />
                <EncryptText>End-to-end encrypted</EncryptText>
            </EncryptContainer>
            <LoginButton onClick={() => handleSignInWithFacebook(user as unknown as User)}>
                Login with Facebook
            </LoginButton>
        </Container>
    );
}