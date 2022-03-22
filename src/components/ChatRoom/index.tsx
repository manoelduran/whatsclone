import React from "react";
import VideoPng from '../../assets/video.png';
import CallPng from '../../assets/call.png';
import BackgroundPng from '../../assets/background.png';
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
    ChatContainer
} from './styles';


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
                    <Video src={VideoPng} width={20} height={15}/>
                    <Call src={CallPng} width={20} height={24}/>
                    <SepareteBorder />
                    <Search src={SearchPng} width={20} height={24} />
                    <Spread  src={SpreadPng} width={20} height={4}/>
                </IconsContainer>
            </Header>
            <ChatContainer>

            </ChatContainer>
        </Container>
    );
}