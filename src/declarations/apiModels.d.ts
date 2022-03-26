interface User {
    id: string;
    name: string;
    email: string;
    avatar: string;
    chats?: Chat[];
}

interface HomeParams {
    user: User;
}

interface ChatRoomParams {
    id: string;
}

interface Message {
    author: string;
    message: string;
    time: string;
}

interface Chat {
    users: User[];
    messages: Message[];
    id: string;
    image: string;
    chatName: string;
    timestemp: string;
    lastMessage: string;
    isActive: boolean;
}