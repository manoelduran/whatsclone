import React from "react";
import VideoPng from '../../assets/video.png';
import BackgroundPng from '../../assets/background.png';
import CallPng from '../../assets/call.png';
import MicPng from '../../assets/mic.png';
import FilesPng from '../../assets/files.png';
import EmoticonPng from '../../assets/emoticon.png';
import SearchPng from '../../assets/Search.png';
import SpreadPng from '../../assets/spread.png';
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
    Emoticon,
    Files,
    Mic,
} from './styles';
import { InputMessage } from "../InputMessage";


export function ChatRoom() {
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
            <ChatContainer style={{backgroundImage: BackgroundPng}}>

            </ChatContainer>
            <FooterContainer>
                <Emoticon src={EmoticonPng} width={30} height={30} />
                <Files src={FilesPng} width={17.5} height={30} />
                <InputMessage
                    value=""
                    onChange={() => {}}
                />
                <Mic src={MicPng} width={18} height={28} />
            </FooterContainer>
        </Container>
    );
}