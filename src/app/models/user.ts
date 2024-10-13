export interface IUser {
    id: number;
    username: string;
    birthDate?: Date;
    phone?: string;
    website?: string;
    role?: string;
}

export interface UserResponse {
    users: IUser[];
}

export const USERS: IUser[] = [
    {
        id: 1000,
        username: "super_bob",
        birthDate: new Date(2004, 0, 10),
        role: "Admin",
        website: "hildegard.org"
    },
    {
        id: 1003,
        username: "vladtymo",
        birthDate: new Date(1998, 3, 10),
        role: "Manager",
        website: "blabla.com"
    },
    {
        id: 3455,
        username: "gigig33",
        birthDate: new Date(2007, 10, 10),
        role: "Manager",
        website: "super.com"
    },
    {
        id: 4555,
        username: "tmvlad",
        birthDate: new Date(2004, 3, 10),
        role: "Admin",
        website: "ramiro.info"
    }
];