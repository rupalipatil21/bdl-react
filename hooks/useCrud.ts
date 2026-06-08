import { ClauseType } from "@/types/form";
import { useCallback, useState } from "react";

export default function useCrud(baseUrl: string) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const request = useCallback( async<TBody> (method: string, collection?: string, body?: TBody, id?: string, isLatest?: string, where?: Record<string, ClauseType>) =>{
        try{
            setLoading(true)
            setError(null)

            let url = baseUrl;
            const params = new URLSearchParams();

            if(method === "GET" && isLatest === "true" && collection){
                url = `${baseUrl}?collection=${collection}&latest=true`;
            } else if (method === "GET" && id){
                url = `${baseUrl}?collection=${collection}&id=${id}`;
            } else if (method === "GET" && collection && where) {
                
                Object.entries(where).forEach(([key, value]) => {
                    if (value !== undefined && value !== null && value.status !== "") {
                        params.append(key, String(value)) 
                    }
                    console.log(params)
                })
                url = `${baseUrl}?collection=${collection}&${params.toString()}`;
            }else if ((method === "PUT" || method === "DELETE") && id) {
                url = `${baseUrl}?collection=${collection}&id=${id}`;
            } else if(method === "GET" && collection) {
                url = `${baseUrl}?collection=${collection}`
            }

            const options: RequestInit = { method, headers: {} };

            if (body) {
                if (body instanceof FormData) {
                    if (collection) body.append("collection", collection);
                    options.body = body;
                } else {
                    options.headers = { "Content-Type": "application/json" };
                    options.body = JSON.stringify(body);
                }
            }

            const res = await fetch(url, options);
            if (!res.ok) throw new Error(await res.text());
            return res.json();


        } catch (e: unknown) {
            setError(
                e instanceof Error ? e.message : "Unexpected error occurred"
            );
        }finally {
            setLoading(false);
        }
    }, [baseUrl])

    const getAll = useCallback(
        (collection: string) => request("GET", collection),
        [request]
    );

    const getById = useCallback(
        (collection: string, id: string) =>
            request("GET", collection, undefined, id),
        [request]
    );

    const getByClause = useCallback(
        (collection: string, where: Record<string, ClauseType>) =>
            request("GET", collection, undefined, undefined, undefined, where),
        [request]
    );

    const getLatest = useCallback(
        (collection: string, isLatest: string) =>
            request("GET", collection, undefined, undefined, isLatest),
        [request]
    );
    
    const saveData = useCallback(
        (collection: string, data: FormData) =>
            request("POST", collection, data),
        [request]
    );

    const update = useCallback(
        (collection: string, id: string, data: FormData) =>
            request("PUT", collection, data, id),
        [request]
    );

    const deleteById = useCallback(
        (collection: string, id: string) =>
            request("DELETE", collection, undefined, id),
        [request]
    );


    return {
        loading,
        error,
        getAll,
        getById,
        getByClause,
        getLatest,
        saveData,
        update,
        deleteById,
    }

}