import { useMutation, useQuery } from "@tanstack/react-query"
import type { Product, ProductResponse } from "../../../types/ProductType"
import { api } from "../../../api"
import { GLOBAL_KEYS } from "./keys"
import { useNavigate } from "react-router-dom"
import type { CheckoutResponse } from "../../../types/CheckoutType"

export const useGetProducts = () => {
    return useQuery<ProductResponse[], Error>({
        queryKey: GLOBAL_KEYS.useGetProducts(),
        queryFn: () => api.get('/products'),
        retry: false,
        refetchInterval: false,
        refetchOnWindowFocus: false,
    })
}

export function useAddCheckout() {
    const navigate = useNavigate()

    return useMutation<CheckoutResponse, Error, Product[]>({
        mutationFn: (products: Product[]) => api.post('/checkout', { products }),
        mutationKey: [GLOBAL_KEYS.useAddCheckout],
        onError: () => console.log('erro'),
        onSuccess: () => {
            navigate('/success')
        }
    })
}