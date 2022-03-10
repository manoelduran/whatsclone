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
    LoadingBar
} from './styles';

export function Splash() {
    return (
        <Container>
            <Logo src={LogoImage} />
            <LoadingBar/>
            <Name>WhatsApp</Name>
            <EncryptContainer>
                <Icon src={LockImage} />
                <EncryptText>End-to-end encrypted</EncryptText>
            </EncryptContainer>
        </Container>
    );
}