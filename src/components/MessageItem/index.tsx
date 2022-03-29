import React from 'react';
import {
    Container,
    MessageContainer,
    MessageName,
    MessageDate,
} from './styles';

interface MessageItemProps {
    data: Message;
    user: User;
}

export function MessageItem({ data, user}: MessageItemProps) {
    return (
        <Container
            style={{ justifyContent: user.name ===  data.author? 'flex-end' : 'flex-start' }}
        >
            <MessageContainer
                style={{ backgroundColor: user.name === data.author ? '#DCF8C6' : '#FFF' }}
            >
                <MessageName>{data.message}</MessageName>
                <MessageDate>{data.time}</MessageDate>
            </MessageContainer>
        </Container>
    );
}