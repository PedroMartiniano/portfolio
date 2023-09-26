'use client'

import Input from "@/Components/Input";
import { useState } from "react";
import TextArea from "@/Components/Input/TextArea";
import { Button } from "@/Components/Button";

export function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleCleanForm = () => {
        setMessage('')
    }

    return (
        <div className="w-full pt-20 h-screen flex flex-col justify-start items-center mt-14 lg:mt-0">
            <h1 className="font-bold font-sans text-2xl lg:text-3xl mb-8 lg:ml-5 self-start justify-start">Fale comigo</h1>
            <div className="flex flex-col gap-6 justify-start items-start  p-5 pb-20 lg:max-w-[50%] lg:justify-center">
                <div className="flex flex-col gap-5 w-full justify-center items-center">
                    <h2>
                        Preencha o formulário para entrar em contato comigo pelo email
                        {' '} <span className="font-semibold">pedropmartiniano@gmail.com</span>
                    </h2>
                    <Input id="name" label='Nome' value={name} onChange={(e: any) => setName(e.target.value)} />
                    <Input id="email" label='E-mail' value={email} onChange={(e: any) => setEmail(e.target.value)} />
                    <TextArea id="message" label='Mensagem' value={message} onChange={(e: any) => setMessage(e.target.value)} />
                </div>
                <div className="flex w-full gap-5">
                    <Button variant="outline" onClick={handleCleanForm}>
                        Limpar
                    </Button>
                    <Button>
                        Enviar
                    </Button>
                </div>
            </div>
        </div>
    )
}