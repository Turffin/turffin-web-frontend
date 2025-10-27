import api from "@/lib/api"
import { LOGIN_URL, SIGNUP_URL } from "@/constants/apiContstants"
import { AuthResponse } from "@/types/authType"

export const login = async (email: string, password: string) => {
    try {
        const response = await api.post<AuthResponse>(LOGIN_URL, { email, password })
        return response.data.data
    } catch (error) {
        console.error(error)
        throw error
    }
}

export const signup = async (name: string, email: string, password: string) => {
    try {
        const response = await api.post<AuthResponse>(SIGNUP_URL, { name, email, password })
        return response.data.data
    } catch (error) {
        console.error(error)
        throw error
    }
}