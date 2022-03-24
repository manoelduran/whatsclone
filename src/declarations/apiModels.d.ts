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
    id: string;
    authorId: string;
    cheked?: boolean;
    chatName: string;
    timestemp: string;
    isActive: boolean;
}