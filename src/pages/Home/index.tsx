import React, { FormEvent, useEffect, useState } from 'react';
import HistoryImage from '../../assets/history.png';
import WifiImage from '../../assets/photo.png';
import PlusImage from '../../assets/plus.png';
import SpreadImage from '../../assets/spread.png';
import {
    Container,
    ChatsContainer,
    MenuContainer,
    Menu,
    Photo,
    History,
    Plus,
    Spread,
    Border,
    BorderHorizontal,
    MessageContainer,
    WhatsPhoto,
    WhatsAlert,
    WhatsMessage,
    Form,
    FormInput,
    FormButton,
} from './styles';
import { SearchBox } from '../../components/SearchBox';
import { ChatCard } from '../../components/ChatCard';
import { collection, getDocs, doc, setDoc, updateDoc, getDoc } from 'firebase/firestore';
import { db } from '../../services/firebase';
import { ChatRoom } from '../../components/ChatRoom';
import { useParams } from 'react-router-dom';

export function Home() {
    const { email } = useParams() as unknown as HomeParams;
    const [chats, setChats] = useState<Chat[]>([]);
    const [active, setActive] = useState(false);
    const [loggedUser, setLoggedUser] = useState<User>({} as User);
    const [chatName, setChatName] = useState('');
    async function getUser() {
        const dbUser = await getDoc(doc(db, "users", email));
        setLoggedUser(dbUser as unknown as User);
    };
    async function getChats() {
        const chatsCollection = collection(db, 'chats');
        const chatSnapshot = await getDocs(chatsCollection);
        const chatList = chatSnapshot.docs.map(doc => doc.data());
        setChats(chatList as unknown as Chat[]);
    };

    async function handleChat(chat: Chat) {
        if (chat.isActive === false) {
            // ENTRAR NO BANCO E ATUALIZAR O IS ACTIVE PARA TRUE
            await updateDoc(doc(db, "chats", chat.chatName), {
                isActive: true
            });
            setActive(true);
        }
    };

    async function handleChatFalse(chat: Chat) {
        if (chat.isActive === true) {
            // ENTRAR NO BANCO E ATUALIZAR O IS ACTIVE PARA FALSE
            await updateDoc(doc(db, "chats", chat.chatName), {
                isActive: false
            });
            setActive(false);
        }
    };
    async function handleCreateRoom(event: FormEvent) {
        event.preventDefault();
        const today = new Date();
        await setDoc(doc(db, "chats", chatName), {
            id: new Date(),
            isActive: false,
            authorId: loggedUser.id,
            cheked: false,
            chatName,
            timestemp: today.getHours() + ":" + today.getMinutes()
        } as unknown as Chat);
        setChatName('');
    }
    useEffect(() => {
        getUser();
    }, [])
    useEffect(() => {
        getChats();
    }, [active, chats])
    return (
        <Container>
            <ChatsContainer>
                <MenuContainer>
                    <Photo src={loggedUser.avatar} width={40} height={40} />
                    <Menu>
                        <History src={HistoryImage} alt='History Image' onClick={() => { }} />
                        <Plus src={PlusImage} alt='Plus Image' onClick={() => { }} />
                        <Spread src={SpreadImage} alt='Spread Image' onClick={() => { }} />
                    </Menu>
                </MenuContainer>
                <SearchBox
                    value={''}
                    onChange={() => { }}
                />
                <BorderHorizontal />
                {chats.map((chat: Chat) => (
                    <ChatCard
                        key={chat.id}
                        data={chat}
                        isActive={chat.isActive}
                        onClick={chat.isActive === true ? () => handleChatFalse(chat) : () => handleChat(chat)}
                    />
                ))
                }
            </ChatsContainer>
            <Border />
            {active ?
                <ChatRoom />
                :
                (
                    <MessageContainer>
                        <WhatsPhoto src={WifiImage} width={420} height={400} alt='Wi-Fi connection photo' />
                        <WhatsAlert>Keep your phone connected</WhatsAlert>
                        <WhatsMessage>
                            WhatsApp connects to your phone to sync messages. To reduce data {('\n')} usage, connect your phone to Wi-Fi.
                        </WhatsMessage>
                        <Form onSubmit={handleCreateRoom}>
                            <FormInput
                                type="text"
                                placeholder="Room name"
                                value={chatName}
                                onChange={(event) => setChatName(event.target.value)}
                            />
                            <FormButton type="submit">
                                Create Room
                            </FormButton>
                        </Form>
                    </MessageContainer>
                )
            }
        </Container>
    );
}