import { CATEGORIES_URL } from "@/constants/apiContstants"
import api from "@/lib/api"
import { Category } from "@/types/categoryType"

export const getCategories = async () => {
    try {
        const response = await api.get<{ data: Category[] }>(CATEGORIES_URL)
        return response.data.data
    } catch (error) {
        console.error(error)
        throw error
    }
}