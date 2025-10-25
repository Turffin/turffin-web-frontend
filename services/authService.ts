import api from "@/lib/api"
import { LOGIN_URL, SIGNUP_URL } from "@/constants/apiContstants"
import { AxiosResponse } from "axios"

interface authResponse {
    success: boolean,
    message: string,
    data: {
        access_token: string,
        token_type: string,
        expires_in: number,
        user: {
            id: number,
            name: string,
            email: string,
            roles: string[]
        }
    }
}

export const login = async (email: string, password: string) => {
    try {
        const response = await api.post<authResponse>(LOGIN_URL, { email, password })
        return response.data.data
    } catch (error) {
        console.error(error)
        throw error
    }
}

export const signup = async (name: string, email: string, password: string) => {
    try {
        const response = await api.post<authResponse>(SIGNUP_URL, { name, email, password })
        return response.data.data
    } catch (error) {
        console.error(error)
        throw error
    }
}