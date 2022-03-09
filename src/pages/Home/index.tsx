import React from 'react';
import WifiImage from '../../assets/photo.png';
import HistoryImage from '../../assets/history.png';
import PlusImage from '../../assets/plus.png';
import SpreadImage from '../../assets/spread.png';
import {
    Container,
    ChatsContainer,
    MessageContainer,
    WhatsPhoto,
    WhatsAlert,
    WhatsMessage,
    MenuContainer,
    Menu,
    Photo,
    History,
    Plus,
    Spread,
    Border,
} from './styles';

export function Home() {
    return (
        <Container>
            <ChatsContainer>
                <MenuContainer>
                    <Photo src='https://github.com/manoelduran.png'    width={40} height={40} alt='My Image'/>
                    <Menu>
                        <History src={HistoryImage}   alt='History Image' />
                        <Plus src={PlusImage}   alt='Plus Image' />
                        <Spread  src={SpreadImage}  alt='Spread Image' />
                    </Menu>
                </MenuContainer>
            </ChatsContainer>
            <Border/>
            <MessageContainer>
                <WhatsPhoto src={WifiImage} width={420} height={400} alt='Wi-Fi connection photo' />
                <WhatsAlert>Keep your phone connected</WhatsAlert>
                <WhatsMessage>
                    WhatsApp connects to your phone to sync messages. To reduce data {('\n')} usage, connect your phone to Wi-Fi.
                </WhatsMessage>
            </MessageContainer>
        </Container>
    );
}