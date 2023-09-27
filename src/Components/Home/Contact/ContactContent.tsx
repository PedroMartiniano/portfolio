'use client'

import Input from "@/Components/Input";
import { useState, useRef } from "react";
import TextArea from "@/Components/Input/TextArea";
import { Button } from "@/Components/Button";
import emailjs from '@emailjs/browser'
import toast, { Toaster } from "react-hot-toast";
import { useLoading } from "@/Context/LoadingContext";

export function ContactContent() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleCleanForm = () => {
        setMessage('')
    }

    const form: any = useRef()

    const { toggleLoading } = useLoading()

    const handleSendEmail = (e: any) => {
        e.preventDefault()

        if (!name) {
            return toast.error('Nome vazio.')
        }

        if (!email) {
            return toast.error('Email vazio.')
        }

        if (!message) {
            return toast.error('Mensagem vazia.')
        }

        toggleLoading(true)
        emailjs.sendForm('service_rcxh1ok', 'template_1ef65qp', form.current!, 'si5jKWq2hCVP8FKCM')
            .then((result) => {
                handleCleanForm()
                toast.success('Email enviado com sucesso!')
                toggleLoading(false)
            }, (error) => {
                console.log(error.text)
                toast.error('Erro ao enviar email.')
                toggleLoading(false)
            })
    }

    return (
        <div className="w-full pt-24 h-screen flex flex-col justify-start items-center mt-14 lg:mt-0">
            <Toaster />
            <h1 className="font-bold font-sans text-2xl lg:text-3xl mb-8 lg:ml-5 self-start justify-start">{'{ '}Fale comigo{' }'}</h1>
            <div className="flex flex-col gap-6 justify-start items-start  p-5 pb-20 lg:max-w-[50%] lg:justify-center">
                <div className="flex flex-col gap-5 w-full justify-center items-center">
                    <h2>
                        Preencha o formulário para entrar em contato comigo pelo email
                        {' '} <span className="font-semibold">pedropmartiniano@gmail.com</span>
                    </h2>
                    <form ref={form} onSubmit={handleSendEmail} id="contact-form" className="flex flex-col gap-5 w-full justify-center items-center">
                        <Input id="name" name="from_name" label='Nome' value={name} onChange={(e: any) => setName(e.target.value)} />
                        <Input id="email" name="reply_email" label='E-mail' value={email} onChange={(e: any) => setEmail(e.target.value)} />
                        <TextArea id="message" name="message" label='Mensagem' value={message} onChange={(e: any) => setMessage(e.target.value)} />
                    </form>
                </div>
                <div className="flex w-full gap-5">
                    <Button variant="outline" onClick={handleCleanForm}>
                        Limpar
                    </Button>
                    <Button type="submit" form="contact-form">
                        Enviar
                    </Button>
                </div>
            </div>
        </div>
    )
}