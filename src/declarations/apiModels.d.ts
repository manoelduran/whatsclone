interface User {
    id: string;
    name: string;
    passowrd: string;
    avatar?: string;
    chats: Chat[];
}

interface Chat {
    id: string;
    authorId: string;
    cheked?: boolean;
    name: string;
    timestemp: string;
    isActive: boolean;
}