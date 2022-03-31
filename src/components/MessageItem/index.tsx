import { time } from 'console';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/AuthContext';
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

export function MessageItem({ data, user }: MessageItemProps) {
    useEffect(() => {
        console.log(user)
    }, [])
    return (
        <Container
            style={{ justifyContent: user.uid === data.author ? 'flex-end' : 'flex-start' }}
        >
            <MessageContainer
                style={{ backgroundColor: user.uid === data.author ? '#DCF8C6' : '#FFF' }}
            >
                <MessageName>{data.message}</MessageName>
 
            </MessageContainer>
        </Container>
    );
}