'use client'

import { useLoading } from "@/Context/LoadingContext"
import { Loader } from "lucide-react"

export function Loading() {
    const { isLoading } = useLoading()

    if (isLoading) {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center rounded-lg bg-gray-300 cursor-pointer p-1 opacity-50">
                <Loader className="animate-spin text-yellow-600 text-9xl" />
            </div>
        )
    }

    return (
        <div className="hidden" />
    )
}