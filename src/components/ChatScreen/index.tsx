import React from "react";
import {
    Avatar,
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
    Video
} from './styles';

interface ChatScreenProps {
    messages: string;
    avatar?: string;
    name: string;
}

export function ChatScreen({ messages, avatar, name }: ChatScreenProps) {
    return (
        <Container></Container>
    );
}