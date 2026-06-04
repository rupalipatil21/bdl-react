import { useCallback, useState } from "react";

export function useRefreshData<T>(fetch: () => Promise<T>) {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState<any>(null)
    const refresh = useCallback(async () => {
        setLoading(true)
        try {
            const res = await fetch();
            
            setData(res)
            return res;
        } finally {
            setLoading(false)
        }
    }, [fetch])
    
    return {
        refresh,
        data,
        loading
    }
}