import { useQuery } from "@tanstack/react-query"
import type { ProductResponse } from "../../../types/ProductType"
import { api } from "../../../api"
import { GLOBAL_KEYS } from "./keys"

export const useGetProducts = () => {
    return useQuery<ProductResponse[], Error>({
        queryKey: GLOBAL_KEYS.useGetProducts(),
        queryFn: () => api.get('/products'),
        retry: false,
        refetchInterval: false,
        refetchOnWindowFocus: false,
    })
}