interface User {
    id: string;
    name: string;
    email: string;
    avatar: string;
    chats?: Chat[];
}

interface HomeParams {
    email: string;
}

interface Chat {
    id: string;
    authorId: string;
    cheked?: boolean;
    chatName: string;
    timestemp: string;
    isActive: boolean;
}