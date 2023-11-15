export interface userData {
    name: string;
    id: number;
}

export interface userPhones {
    id: number;
    number: string;
    userId: number;
}

export interface GetUserResponse {
    totalUsers: number;
    users: [];
}