import React, { useEffect, useState } from 'react';
import LogoImage from '../../assets/logo.png';
import LockImage from '../../assets/lock.png';
import {
    Container,
    Logo,
    Name,
    EncryptContainer,
    Icon,
    EncryptText,
    InputName,
    PasswordInput,
    CreateContainer,
    CreateUser,
    RecoverPassword,
    LoginButton
} from './styles';
import { useAuth } from '../../hooks/useAuth';


export function Splash() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signIn, createAccount } = useAuth();
    function handleLogin() {
        signIn(email, password)
    };

    function handleCreateUser() {
        createAccount(email, password)
    };
    return (
        <Container>
            <Logo src={LogoImage} />
            <Name>Manubas App</Name>
            <EncryptContainer>
                <Icon src={LockImage} />
                <EncryptText>End-to-end encrypted</EncryptText>
            </EncryptContainer>
            <InputName
                value={email}
                placeholder="Email"
                type="email"
                onChange={(event) => setEmail(event.target.value)}
            />
            <PasswordInput
                value={password}
                placeholder="Password"
                type="password"
                onChange={(event) => setPassword(event.target.value)}
            />
            <LoginButton onClick={handleLogin}>
                Login
            </LoginButton>
            <CreateContainer>
                <CreateUser onClick={handleCreateUser}>
                    Create User
                </CreateUser>
                <RecoverPassword>
                    Recover Password
                </RecoverPassword>
            </CreateContainer>
        </Container>
    );
}