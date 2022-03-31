import React, { useEffect, useState } from 'react';
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
    MessageContainer,
    WhatsPhoto,
    WhatsAlert,
    WhatsMessage,
} from './styles';
import { SearchBox } from '../../components/SearchBox';
import { ChatCard } from '../../components/ChatCard';
import { collection, getDocs, doc, updateDoc, getDoc } from 'firebase/firestore';
import { db } from '../../services/firebase';
import { ChatRoom } from '../../components/ChatRoom';
import { NewChat } from '../../components/NewChat';

export function Home() {

    const [chats, setChats] = useState<Chat[]>([]);
    const [chatSelected, setChatSelected] = useState<Chat>({} as Chat);
    const [activeChat, setActiveChat] = useState({} as Chat);
    const [openModal, setOpenModal] = useState(false);
    const [loggedUser, setLoggedUser] = useState<User>(JSON.parse(localStorage.getItem('user')!) ?? null);

    async function getChats() {
        const chatsCollection = collection(db, "chats");
        const chatSnapshot = await getDocs(chatsCollection);
        const chatList = chatSnapshot.docs.map(doc => doc.data());
        setChats(chatList as unknown as Chat[]);
    };

    function handleOpenModal() {
        setOpenModal(true);
    }

    async function handleChat(chat: Chat) {
        setChatSelected(chat)
        if (chat.isActive === false) {
            // ENTRAR NO BANCO E ATUALIZAR O IS ACTIVE PARA TRUE
            await updateDoc(doc(db, "chats", chat.chatName), {
                isActive: true
            });
            setActiveChat({
                ...activeChat,
                isActive: true,
            });
        }
    };

    async function handleChatFalse(chat: Chat) {
        setChatSelected(chat)
        if (chat.isActive === true) {
            // ENTRAR NO BANCO E ATUALIZAR O IS ACTIVE PARA FALSE
            await updateDoc(doc(db, "chats", chat.chatName), {
                isActive: false
            });
            setActiveChat({
                ...activeChat,
                isActive: false,
            });
        }
    };

    useEffect(() => {
        getChats();
    }, [activeChat.isActive, chats])
    return (
        <Container>
            <ChatsContainer>
                {openModal ?
                    <NewChat
                        modal={openModal}
                        setModal={setOpenModal}
                    />

                    :
                    <>
                        <MenuContainer>
                            <Photo src={loggedUser.avatar} width={40} height={40} />
                            <Menu>
                                <History src={HistoryImage} alt='History Image' onClick={() => { }} />
                                <Plus src={PlusImage} alt='Plus Image' onClick={handleOpenModal} />
                                <Spread src={SpreadImage} alt='Spread Image' onClick={() => { }} />
                            </Menu>
                        </MenuContainer>
                        <SearchBox
                            value={''}
                            onChange={() => { }}
                        />
                        {chats.map((chat: Chat, key) => (
                            <ChatCard
                                key={key}
                                data={chat}
                                isActive={chat.isActive}
                                onClick={chat.isActive === true ? () => handleChatFalse(chat) : () => handleChat(chat)}
                            />
                        ))
                        }
                    </>
                }
            </ChatsContainer>
            {activeChat.isActive === true ?
                <ChatRoom
                    user={loggedUser}
                    data={chatSelected}
                />
                :
                <MessageContainer>
                    <WhatsPhoto src={WifiImage} width={420} height={400} alt='Wi-Fi connection photo' />
                    <WhatsAlert>Keep your phone connected</WhatsAlert>
                    <WhatsMessage>
                        WhatsApp connects to your phone to sync messages. To reduce data {('\n')} usage, connect your phone to Wi-Fi.
                    </WhatsMessage>
                </MessageContainer>
            }
        </Container>
    );
}