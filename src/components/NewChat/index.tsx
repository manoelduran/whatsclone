import { collection, getDocs, updateDoc, doc, arrayUnion, setDoc, addDoc } from 'firebase/firestore';
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
}

export function NewChat({ modal, setModal }: NewChatProps) {
    const [users, setUsers] = useState<User[]>([] as User[]);
    async function getUsers() {
        const UserCollection = collection(db, 'users');
        const UserSnapshot = await getDocs(UserCollection);
        const UserList = UserSnapshot.docs.map(doc => doc.data());
        setUsers(UserList as unknown as User[]);
    };    
    async function addNewChat(newUserChat: User) {
        const chatName = newUserChat.name;
        await setDoc(doc(db,"chats", chatName), {
            chatUsers: [],
            messages: [],
            chatName,
            image: newUserChat.avatar,
            lastMessage: '',
            id: new Date(),
            isActive: false,
        } as unknown as Chat);
        // await updateDoc(doc(db, "users", user.emai), {
        //     chats: arrayUnion({
        //         id: new Date(),
        //         image: newUserChat.avatar,
        //         chatName: newUserChat.name,
        //         with: newUserChat.id
        //     })
        // });
        // await updateDoc(doc(db, "users", newUserChat.email), {
        //     chats: arrayUnion({
        //         id: new Date(),
        //         image: user.avatar,
        //         chatName: user.name,
        //         with: user.id
        //     })
        // });
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
                {users.map((user) => (
                    <NewChatItem key={user.id} onClick={() => addNewChat(user)}>
                        <UserImage src={user.avatar} alt={user.name} />
                        <UserName>{user.name} </UserName>
                    </NewChatItem>
                ))}
            </NewChatList>
        </Container>
    );
}


