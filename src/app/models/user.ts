export interface IUser {
    id: number;
    login: string;
    birthdate?: Date;
    role: string;
}

export const USERS: IUser[] = [
    {
        id: 1000,
        login: "super_bob",
        birthdate: new Date(2004, 0, 10),
        role: "Admin"
    },
    {
        id: 1003,
        login: "vladtymo",
        birthdate: new Date(1998, 3, 10),
        role: "Manager"
    },
    {
        id: 3455,
        login: "gigig33",
        birthdate: new Date(2007, 10, 10),
        role: "Manager"
    },
    {
        id: 4555,
        login: "tmvlad",
        birthdate: new Date(2004, 3, 10),
        role: "Admin"
    }
];