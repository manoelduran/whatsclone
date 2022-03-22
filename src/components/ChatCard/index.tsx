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
    isActive: boolean;
    onClick: () => void;
}
export function ChatCard({ data, onClick, isActive}: ChatCardProps) {
    return (
        <Container onClick={onClick} isActive={isActive}  >
            <Photo src='https://github.com/manoelduran.png' width={40} height={40} alt='My Image' />
            <ChatContainer>
                <InfoContainer>
                    <Name>{data.chatName}</Name>
                    <MessageContainer>
                        {data.isActive === true ?
                            <Check src={CheckedImage} />
                            :
                            <Check src={SingleTickImage} />}
                        <LastMessage>ULTIMA MENSAGEM</LastMessage>
                    </MessageContainer>
                </InfoContainer>
                <Time>{data.timestemp}</Time>
            </ChatContainer>
        </Container>
    );
}