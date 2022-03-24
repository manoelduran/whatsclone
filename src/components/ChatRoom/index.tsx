import React, { useState } from "react";
import VideoPng from '../../assets/video.png';
import BackgroundPng from '../../assets/background.png';
import CallPng from '../../assets/call.png';
import SearchPng from '../../assets/Search.png';
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

interface ChatRoomProps {
    data: Chat;
}

export function ChatRoom() {
    const [message, setMessage] = useState('');
    const [isEmojiOpen, setIsEmojiOpen] = useState(false);
    const theme = useTheme();
    function handleEmojiClick() {

    };
    function handleSendMessage(){

    };
    function handleEmojiOpen() {
        if (isEmojiOpen === true) {
            setIsEmojiOpen(false);
        } else {
            setIsEmojiOpen(true);
        }
    }

    return (
        <Container>
            <Header>
                <HeaderInfo>
                    <Photo src='https://github.com/manoelduran.png' width={40} height={40} />
                    <NameContainer>
                        <Name>Name</Name>
                        <LastTime>last seen today at 12:22pm</LastTime>
                    </NameContainer>
                </HeaderInfo>
                <IconsContainer>
                    <Video src={VideoPng} width={20} height={15} />
                    <Call src={CallPng} width={20} height={24} />
                    <SepareteBorder />
                    <Search src={SearchPng} width={20} height={24} />
                    <Spread src={SpreadPng} width={20} height={4} />
                </IconsContainer>
            </Header>
            <ChatContainer style={{ backgroundImage: BackgroundPng }}>
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
                <AiOutlinePaperClip size={30} color={theme.name} style={{marginLeft: 20}} />
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