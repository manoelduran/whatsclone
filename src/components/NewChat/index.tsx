import { collection, getDocs, addDoc, updateDoc, doc, arrayUnion, setDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../../services/firebase';
import { TiBackspaceOutline } from 'react-icons/ti';
import {
    Container,
    Header,
    Title,
    NewChatList,
    NewChatItem,
    UserImage,
    UserName,
} from './styles';

interface NewChatProps {
    modal: boolean;
    setModal: (modal: boolean) => void;
    user: User;
    chatList: Chat[];
}

export function NewChat({ modal, setModal, user, chatList }: NewChatProps) {
    const [users, setUsers] = useState<User[]>([] as User[]);
    async function getUsers() {
        const UserCollection = collection(db, 'users');
        const UserSnapshot = await getDocs(UserCollection);
        const UserList = UserSnapshot.docs.map(doc => doc.data());
        setUsers(UserList as unknown as User[]);
    };
    async function addNewChat(newUserChat: User) {
        await setDoc(doc(db, "chats", `${new Date()}`), {
            users: [user.id, newUserChat.id],
            id: new Date(),
            messages: [] as Message[],
            isActive: false,
            timestemp: new Date()
        });
        await updateDoc(doc(db, "users", user.email), {
            chats: arrayUnion({
                id: new Date(),
                image: newUserChat.avatar,
                chatName: newUserChat.name,
                with: newUserChat.id
            })
        });
        await updateDoc(doc(db, "users", newUserChat.email), {
            chats: arrayUnion({
                id: new Date(),
                image: user.avatar,
                chatName: user.name,
                with: user.id
            })
        });
        handleClose();
    }
    function handleClose() {
        setModal(false);
    }
    useEffect(() => {
        getUsers();
    }, [users])
    return (
        <Container style={{ left: modal === true ? 0 : -415 }}>
            <Header>
                <TiBackspaceOutline color='#FFFFF'
                    size={30}
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}
                    onClick={handleClose}
                />
                <Title>Nova Conversa</Title>
            </Header>
            <NewChatList>
                {users.map((user, key) => (
                    <NewChatItem key={key} onClick={() => addNewChat(user)}>
                        <UserImage src={user.avatar} alt={user.name} />
                        <UserName>{user.name} </UserName>
                    </NewChatItem>
                ))}
            </NewChatList>
        </Container>
    );
}


