import React, { useEffect, useState } from 'react';
import WifiImage from '../../assets/photo.png';
import HistoryImage from '../../assets/history.png';
import PlusImage from '../../assets/plus.png';
import SpreadImage from '../../assets/spread.png';
import {
    Container,
    ChatsContainer,
    MessageContainer,
    WhatsPhoto,
    WhatsAlert,
    WhatsMessage,
    MenuContainer,
    Menu,
    Photo,
    History,
    Plus,
    Spread,
    Border,
    BorderHorizontal,
} from './styles';
import { SearchBox } from '../../components/SearchBox';
import { ChatCard } from '../../components/ChatCard';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../services/firebase';

export function Home() {
    const [chats, setChats] = useState<Chat[]>([] as Chat[]);
    async function getChats() {
        const chatsCollection = collection(db, 'chats');
        const chatSnapshot = await getDocs(chatsCollection);
        const chatList = chatSnapshot.docs.map(doc => doc.data());
        setChats(chatList as unknown as Chat[]);
    };
    function handleChat(chat: Chat){

    }
    useEffect(() => {
        getChats();
    }, [chats])
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
                    onClick={() => handleChat(chat)}
                    />
                ))

                }
            </ChatsContainer>
            <Border />
            <MessageContainer>
                <WhatsPhoto src={WifiImage} width={420} height={400} alt='Wi-Fi connection photo' />
                <WhatsAlert>Keep your phone connected</WhatsAlert>
                <WhatsMessage>
                    WhatsApp connects to your phone to sync messages. To reduce data {('\n')} usage, connect your phone to Wi-Fi.
                </WhatsMessage>
            </MessageContainer>
        </Container>
    );
}