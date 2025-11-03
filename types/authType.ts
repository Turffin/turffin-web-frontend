export interface AuthResponse {
    success: boolean,
    message: string,
    data: {
        access_token: string,
    }
}