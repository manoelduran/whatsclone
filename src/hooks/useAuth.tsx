import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import React, { useState, createContext, useContext, ReactNode } from 'react';
import { auth, db } from '../services/firebase';


interface AuthProviderProps {
    children: ReactNode;
};

interface AuthContextData {
    user: User | null;
    loading: boolean;
    signIn: (email: string, password: string) => Promise<void>;
    createAccount: (email: string, password: string) => Promise<void>;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(false);
    async function signIn(email: string, password: string) {
        setLoading(true);
        await signInWithEmailAndPassword(auth, email, password)
            .then(async (account) => {
                const currentUser = account.user as unknown as User;
                setUser(currentUser)
            })
            .catch((error) => {
                setLoading(false)
                console.log(error)
            })
    };

    async function createAccount(email: string, password: string) {
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
    return (
        <AuthContext.Provider value={{ loading, createAccount, signIn, user }} >
            {children}
        </AuthContext.Provider>
    );
};

function useAuth() {
    const context = useContext(AuthContext);
    return context;
};

export { AuthProvider, useAuth };