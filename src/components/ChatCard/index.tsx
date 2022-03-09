import React from 'react';
import SingleTickImage from '../../assets/singletick.png';
import DoubletickImage from '../../assets/doubletick.png';
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
export function ChatCard() {
    return (
        <Container>
            <Photo src='https://github.com/manoelduran.png'    width={40} height={40} alt='My Image'/>
            <ChatContainer>
                <InfoContainer>
                    <Name>Nakula Bagchi</Name>
                    <MessageContainer>
                        <Check src={SingleTickImage} />
                        <LastMessage>just ideas for next time</LastMessage>
                    </MessageContainer>
                </InfoContainer>
                <Time>01:55 pm</Time>
            </ChatContainer>
        </Container>
    );
}