import { useQuery } from '@tanstack/react-query';
import { getCategories } from '@/services/categoryService';
import { Category } from '@/types/categoryType';

export const useCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const response = await getCategories()
      return { data: response }
    },
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
};
