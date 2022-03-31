import React, { useRef, useState, useEffect } from "react";
import VideoPng from '../../assets/video.png';
import BackgroundPng from '../../assets/background.png';
import CallPng from '../../assets/call.png';
import RoomSearchPng from '../../assets/Roomsearch.png';
import SpreadPng from '../../assets/spread.png';
import EmojiPicker from "emoji-picker-react";
import { AiOutlineSend, AiOutlinePaperClip } from 'react-icons/ai';
import { FiMic } from 'react-icons/fi';
import { MdInsertEmoticon } from 'react-icons/md';
import {
    Photo,
    Call,
    Container,
    Header,
    HeaderInfo,
    IconsContainer,
    Name,
    NameContainer,
    Search,
    SepareteBorder,
    Spread,
    Video,
    ChatContainer,
    FooterContainer,
    EmojiContainer,
    InputMessage,
} from './styles';
import { useTheme } from "styled-components";
import { MessageItem } from "../MessageItem";
import { arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../services/firebase";


interface ChatRoomProps {
    data: Chat;
    user: User;
}

export function ChatRoom({ user, data }: ChatRoomProps) {
    const body = useRef<any>();
    const [message, setMessage] = useState("");
    const [messagesScreen, setMessagesScreen] = useState<Message[]>([]);
    const [isEmojiOpen, setIsEmojiOpen] = useState(false);
    const theme = useTheme();
    async function getMessages() {
        const docRef = doc(db, "chats", data.chatName);
        const doctSnapshot = await getDoc(docRef);
        if (doctSnapshot.exists()) {
            const data = doctSnapshot.data() as unknown as Chat;
            setMessagesScreen(data.messages);
        }
    };
    async function handleSendMessage() {
        let hour = new Date();
        await updateDoc(doc(db, "chats", data.chatName), {
            messages: arrayUnion(
                {
                    author: user.uid,
                    message,
                    time: hour,
                }
            ),
            lastMessage: message
        });
        setMessage("");
        setIsEmojiOpen(false);
    };
    function handleEmojiOpen() {
        if (isEmojiOpen === true) {
            setIsEmojiOpen(false);
        } else {
            setIsEmojiOpen(true);
        }
    }
    useEffect(() => {
        getMessages();
    }, [messagesScreen])
    useEffect(() => {
        if (body.current.scrollHeight > body.current.offsetHeight) {
            body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight;
        }
    }, [messagesScreen])

    return (
        <Container>
            <Header>
                <HeaderInfo>
                    <Photo src={data.image} width={40} height={40} />
                    <NameContainer>
                        <Name>{data.chatName}</Name>
                    </NameContainer>
                </HeaderInfo>
                <IconsContainer>
                    <Video src={VideoPng} width={20} height={15} />
                    <Call src={CallPng} width={20} height={24} />
                    <SepareteBorder />
                    <Search src={RoomSearchPng} width={20} height={24} />
                    <Spread src={SpreadPng} width={20} height={4} />
                </IconsContainer>
            </Header>
            <ChatContainer ref={body} style={{ backgroundImage: BackgroundPng }}>
                {messagesScreen.map((messageScreen, key) => (
                    <MessageItem
                        data={messageScreen}
                        key={key}
                        user={user}
                    />
                ))}
            </ChatContainer>
            <EmojiContainer
                style={{ height: isEmojiOpen ? '200px' : '0px' }}
            >
                <EmojiPicker

                    disableSearchBar
                    disableSkinTonePicker
                    onEmojiClick={() => { }}
                />
            </EmojiContainer>
            <FooterContainer>
                <MdInsertEmoticon
                    size={30}
                    color={isEmojiOpen ? theme.loading : theme.name}
                    onClick={handleEmojiOpen}
                />
                <AiOutlinePaperClip size={30} color={theme.name} style={{ marginLeft: 20 }} />
                <InputMessage
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    type='text'
                    placeholder='Type a message here'
                />
                {
                    message.length === 0 ?
                        <FiMic size={30} color={theme.name} style={{ marginLeft: 20 }} />
                        :
                        <AiOutlineSend
                            size={30}
                            color={theme.name}
                            style={{ marginLeft: 20 }}
                            onClick={handleSendMessage}
                        />
                }
            </FooterContainer>
        </Container>
    );
}