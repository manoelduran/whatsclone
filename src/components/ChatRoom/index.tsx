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
    LastTime,
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
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebase";

interface ChatRoomProps{
    data: Chat;
    user: User;
}

export function ChatRoom({user, data}: ChatRoomProps) {
    const body = useRef<any>();
    const [message, setMessage] = useState("");
    const [loggedUser, setLoggedUser] = useState<User>({} as User);
    const [messages, setMessages] = useState<Message[]>([
        { message: 'Ola chegue mais', time: '20:30', author: '123 '}, 
        { message: 'Ola chegue mais', time: '22:30', author: '123' }, 
        { message: 'Ola chegue mais', time: '21:30', author: user.id },
        { message: 'Ola chegue mais', time: '21:30', author: user.id },
        { message: 'Ola chegue mais', time: '21:30', author: user.id },
        { message: 'Ola chegue mais', time: '21:30', author: user.id },
        { message: 'Ola chegue mais', time: '20:30', author: '123 '}, 
        { message: 'Ola chegue mais', time: '22:30', author: '123' }, 
        { message: 'Ola chegue mais', time: '21:30', author: user.id },
        { message: 'Ola chegue mais', time: '21:30', author: user.id },
        { message: 'Ola chegue mais', time: '21:30', author: user.id },
        { message: 'Ola chegue mais', time: '21:30', author: user.id },
    ] as Message[]);
    const [isEmojiOpen, setIsEmojiOpen] = useState(false);
    const theme = useTheme();
    function handleEmojiClick() {

    };
    function handleSendMessage() {

    };
    function handleEmojiOpen() {
        if (isEmojiOpen === true) {
            setIsEmojiOpen(false);
        } else {
            setIsEmojiOpen(true);
        }
    }

    useEffect(() => {
        if(body.current.scrollHeight > body.current.offsetHeight){
            body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight;
        }
    }, [messages])

    return (
        <Container>
            <Header>
                <HeaderInfo>
                    <Photo src={data.image} width={40} height={40} />
                    <NameContainer>
                        <Name>{data.chatName}</Name>
                        <LastTime>last seen today at 12:22pm</LastTime>
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
                {messages.map((message, key) => (
                    <MessageItem
                        data={message}
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
                    onEmojiClick={handleEmojiClick}
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