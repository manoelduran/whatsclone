interface User {
    id: string;
    name: string;
    avatar?: string;
}

interface Chat {
    id: string;
    name: string;
    avatar?: string;
    lastMessage: string;
    cheked?: boolean;
    time: string;
}