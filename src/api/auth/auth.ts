import { authRequest } from '../request';

export interface User {
    email: string;
}

export interface AuthUser {
    email: string;
    password: string;
}

interface AuthResponse {
    access_token: string
}

export class AuthApiService {
    public static async login(authUser: AuthUser) {
        return authRequest<AuthResponse>({
            url: `/auth/login`,
            method: 'POST',
            data: authUser
        });
    }
}