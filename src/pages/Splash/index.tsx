import React, { useEffect, useState } from 'react';
import LogoImage from '../../assets/logo.png';
import LockImage from '../../assets/lock.png';
import { auth, db } from '../../services/firebase';
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
} from './styles';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";


export function Splash() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    async function createUser() {
        await createUserWithEmailAndPassword(auth, email, password)
            .then(async (account) => {
                await setDoc(doc(db, "users", email), {
                    id: account.user.uid,
                    name: email,
                    passowrd: password,
                    chats: [],
                });
            })
            .catch((error) => {
                return console.log(error)
            });
    }

    // async function FacebookPopup() {
    //     const provider = new FacebookAuthProvider();
    //     await signInWithRedirect(auth, provider);
    //     const result = await getRedirectResult(auth);
    //     if (result) {
    //         // This is the signed-in user
    //         const user = result.user;
    //         // This gives you a Facebook Access Token.
    //         const credential = FacebookAuthProvider.credentialFromResult(result);
    //         const token = credential?.accessToken;
    //         return { user, token }
    //     }
    // }
    // useEffect(() => {
    //     FacebookPopup()
    // }, [])
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
            <CreateContainer>
                <CreateUser onClick={createUser}>
                    Create User
                </CreateUser>
                <RecoverPassword>
                    Recover Password
                </RecoverPassword>
            </CreateContainer>


        </Container>
    );
}