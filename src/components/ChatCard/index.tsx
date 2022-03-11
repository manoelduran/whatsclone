import React from 'react';
import SingleTickImage from '../../assets/singletick.png';
import CheckedImage from '../../assets/checked.png';
import {
    Container,
    Photo,
    ChatContainer,
    InfoContainer,
    Name,
    MessageContainer,
    Check,
    LastMessage,
    Time,
} from './styles';
interface ChatCardProps {
    data: Chat;
    onClick: () => void;
}
export function ChatCard({ data, onClick }: ChatCardProps) {
    return (
        <Container onClick={onClick} isActive={data.isActive}  >
            <Photo src='https://github.com/manoelduran.png' width={40} height={40} alt='My Image' />
            <ChatContainer>
                <InfoContainer>
                    <Name>{data.name}</Name>
                    <MessageContainer>
                        {data.cheked ?
                            <Check src={CheckedImage} />
                            :
                            <Check src={SingleTickImage} />}
                        <LastMessage>{data.lastMessage}</LastMessage>
                    </MessageContainer>
                </InfoContainer>
                <Time>{data.time}</Time>
            </ChatContainer>
        </Container>
    );
}