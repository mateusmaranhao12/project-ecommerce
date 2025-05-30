import { useState } from "react"

export function useCustomLocalStorage<T>(key: string, initialvalue: T) {
    const [storedValue, setStoredValue] = useState<T>(() => {
        try {
            const item = window.localStorage.getItem(key)
            return item ? (JSON.parse(item) as T) : initialvalue
        } catch {
            return initialvalue
        }
    })

    const setValue = (value: T) => {
        setStoredValue(value)
        window.localStorage.setItem(key, JSON.stringify(value))
    }

    const removeValue = () => {
        setStoredValue(initialvalue)
        window.localStorage.removeItem(key)
    }

    return [storedValue, setValue, removeValue] as const
}