import React, { useEffect } from 'react';
import LogoImage from '../../assets/logo.png';
import LockImage from '../../assets/lock.png';
import { app, auth } from '../../services/firebase';
import {
    Container,
    Logo,
    Name,
    EncryptContainer,
    Icon,
    EncryptText,
    LoadingBar
} from './styles';
import { FacebookAuthProvider, getRedirectResult, signInWithRedirect } from 'firebase/auth';

export function Splash() {
    async function FacebookPopup() {
        const provider = new FacebookAuthProvider();
        await signInWithRedirect(auth, provider);
        const result = await getRedirectResult(auth);
        if (result) {
            // This is the signed-in user
            const user = result.user;
            // This gives you a Facebook Access Token.
            const credential = FacebookAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            return { user, token }
        }
    }
    useEffect(() => {
        FacebookPopup()
    }, [])
    return (
        <Container>
            <Logo src={LogoImage} />
            <LoadingBar />
            <Name>WhatsApp</Name>
            <EncryptContainer>
                <Icon src={LockImage} />
                <EncryptText>End-to-end encrypted</EncryptText>
            </EncryptContainer>
        </Container>
    );
}