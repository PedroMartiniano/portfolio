'use client'

import { LoadingProvider } from "@/Context/LoadingContext"
import { ContactContent } from "./ContactContent"
import { Loading } from "@/Components/Loading"

export function Contact() {
    return (
        <LoadingProvider>
            <ContactContent />
            <Loading />
        </LoadingProvider>
    )
}