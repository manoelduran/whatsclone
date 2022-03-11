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
import { collection, getDocs, doc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../services/firebase';
import { ChatRoom } from '../../components/ChatRoom';

export function Home() {
    const [chats, setChats] = useState<Chat[]>([]);
    const [active, setActive] = useState(false);
    const [name, setName] = useState('');
    async function getChats() {
        const chatsCollection = collection(db, 'chats');
        const chatSnapshot = await getDocs(chatsCollection);
        const chatList = chatSnapshot.docs.map(doc => doc.data());
        setChats(chatList as unknown as Chat[]);
    };
    async function handleChat(chat: Chat) {
        if (chat.isActive === false) {
            // ENTRAR NO BANCO E ATUALIZAR O IS ACTIVE PARA TRUE
            await updateDoc(doc(db, "chats", name), {
                isActive: true
            });
            setActive(true);
        }
    };

    async function handleChatFalse(chat: Chat) {
        if (chat.isActive === true) {
            // ENTRAR NO BANCO E ATUALIZAR O IS ACTIVE PARA FALSE
            await updateDoc(doc(db, "chats", name), {
                isActive: false
            });
            setActive(false);
        }
    };

    async function handleCreateRoom(event: FormEvent) {
        event.preventDefault();
        await setDoc(doc(db, "chats", name), {
            id: new Date(),
            isActive: false,
            authorId: '',
            cheked: false,
            name,
            timestemp: ''
        } as unknown as Chat);
    }

    useEffect(() => {
        getChats();
    }, [])
    return (
        <Container>
            <ChatsContainer>
                <MenuContainer>
                    <Photo src='https://github.com/manoelduran.png' width={40} height={40} alt='My Image' />
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
                                value={name}
                                onChange={(event) => setName(event.target.value)}
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