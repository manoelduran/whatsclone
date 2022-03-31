import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { Auth, FacebookAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../services/firebase';



interface AuthProviderProps {
    children: ReactNode;
}

interface AuthContextData {
    user: User | null;
    signInWithFacebook: (auth: Auth, provider: FacebookAuthProvider) => Promise<void>;
}

const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    async function signInWithFacebook(auth: Auth, provider: FacebookAuthProvider) {
        await signInWithPopup(auth, provider)
            .then(async (response) => {
                console.log('RESPONSE')
                console.log(response)
                await setDoc(doc(db, "users", String(response.user.email)), {
                    uid: response.user.uid,
                    email: response.user.email,
                    name: response.user.displayName,
                    avatar: response.user.photoURL,
                    chats: []
                } as User, { merge: true });
                setUser(response.user as unknown as User);
                localStorage.setItem("user", JSON.stringify(response.user));
                console.log('LOCAL USER')
                console.log(response.user)
            })
            .catch((err) => {
                console.log(err.message);
            })
            .finally(() => {
                setLoading(false);
            })
    };

useEffect(() => {
    let isMounted = true;
    async function loadUserData() {
        const userCollection = localStorage.getItem("user")
        const parsedUser = JSON.parse(String(userCollection))
        console.log('TRY LOGIN')
        console.log(parsedUser)
        if (parsedUser) {
            const userData = parsedUser as unknown as User;
            if (isMounted) {
                setUser(userData)
                setLoading(false);
            }
        };
    };
    loadUserData();
    return () => {
        isMounted = false;
    };
}, [])

    return (
        <AuthContext.Provider value={{ user, signInWithFacebook }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(): AuthContextData {
    const context = useContext(AuthContext);
    return context
}

export { AuthProvider, useAuth }