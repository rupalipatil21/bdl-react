"use client"
import { usePathname } from "next/navigation";

export default function useHideSection(){
    const pathname = usePathname()
    const noHeaderPaths = [
        "/login",
        "/dashboard",
        "/banner",
        "/explore-list",
        "/add-exhibition",
        "/calendar-list",
    ];

    return !noHeaderPaths.includes(pathname);
}