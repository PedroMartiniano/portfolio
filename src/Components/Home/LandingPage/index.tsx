'use client'

import { Button } from "@/Components/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

export function LandingPage() {
    const router = useRouter()

    return (
        <div className="flex flex-col gap-6 pt-24 lg:grid lg:grid-cols-2 justify-center items-center h-screen">
            <div className="hidden lg:flex justify-center">
                <img src="/hacker.svg" alt="" className="w-2/3 mb-4" />
            </div>
            <div className="flex flex-col gap-6">
                <h1 className="font-sans font-extrabold text-3xl self-start">Olá, meu nome é <span className="text-yellow-600">Pedro Paulino Martiniano</span></h1>
                <h2 className="font-sans font-extrabold text-2xl self-start text-yellow-600">{`{ `}Desenvolvedor BackEnd{` }`}</h2>
                <p className="text-sm">
                    Seja muito bem vindo ao meu portfólio! Aqui você descobrirá um pouco sobre minhas habilidades, tecnologias que trabalho e projetos feitos por mim até o momento.
                </p>
                <p className="text-sm">
                    Sou uma pessoa que busca estar em constante evolução e que é apaixado por tecnologia! Minha missão é desenvolver softwares seguros e eficientes, que sejam de grande utilidade para a sociedade.
                </p>
                <div className="flex flex-col gap-6 lg:flex-row">
                    <Button variant="outline" onClick={() => router.push('/#about-me')}>Sobre Mim</Button>
                    <Button variant="primary" onClick={() => router.push('/projects')}>Meus Projetos</Button>
                </div>
            </div>
        </div>
    )
}