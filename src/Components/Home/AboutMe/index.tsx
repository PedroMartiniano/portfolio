'use client'

import { Button } from "@/Components/Button";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function AboutMe() {
    const router = useRouter()

    return (
        <div className="pt-24">
            <h1 className="font-bold font-sans text-2xl lg:text-3xl mb-8 lg:ml-10">{'{ '}Sobre mim{' }'}</h1>
            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 justify-start items-start min-h-screen p-5">
                <div className="flex flex-col w-full justify-center items-center">
                    <img src="/foto-perfil.jpeg" alt="foto-perfil" className="rounded-full w-48 h-48 lg:w-72 lg:h-72 shadow-xl" />
                    <div className="flex w-full justify-center items-center gap-1 mt-5">
                        <Link href={'https://www.linkedin.com/in/pedro-paulino-martiniano/'} passHref={true} target="_blanck">
                            <Button variant="ghost" className="w-13 h-13 cursor-pointer rounded-full">
                                <Linkedin />
                            </Button>
                        </Link>

                        <Link href={'https://github.com/PedroMartiniano'} passHref={true} target="_blanck">
                            <Button variant="ghost" className="w-13 h-13 cursor-pointer rounded-full">
                                <Github />
                            </Button>
                        </Link>

                        <Link href={'/#contact'} passHref={true}>
                            <Button variant="ghost" className="w-13 h-13 cursor-pointer rounded-full">
                                <Mail />
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col item-center justify-center">
                    <div className="flex flex-col gap-5 border-l-2 border-gray-950">

                        <div className="pl-4">
                            <div className="relative right-6 w-4 h-4 bg-gray-200 border-2 border-gray-950 rounded-full" />
                            <div className="relative bottom-5">
                                <h2 className="font-semibold text-lg font-sans">Eu</h2>
                                <p className="text-sm text-justify">Meu nome é Pedro Paulino Martiniano, tenho 19 anos e sou Desenvolvedor Backend Nodejs/Golang/Python! Iníciei no mundo da programação como quase todo mundo, aprendendo HTML, CSS e  JavaScript, e fui progredindo para bibliotecas e frameworks como o ReactJs e NextJs, porém descobri que minha verdadeira paixão é o BackEnd, onde eu estou depositando todas minhas horas de estudo diário para me aprofundar cada dia mais nesse mundo!</p>
                            </div>
                        </div>

                        <div className="pl-4">
                            <div className="relative right-6 w-4 h-4 bg-gray-200 border-2 border-gray-950 rounded-full" />
                            <div className="relative bottom-5">
                                <h2 className="font-semibold text-lg font-sans">Estudante</h2>
                                <p className="text-sm text-justify">Atualmente estou cursando o 5º semestre de Engenharia de Software na Uni-Facef, onde iniciei meus estudos em fevereiro de 2022, possuo quatro certificações de reconhecimento pela melhor média da minha turma no semestre, e três certificações Banco de Dados Oracle. Também sou apaixonado por aprender coisas novas e aprimorar minhas habilidades, e por isso, estou sempre em busca de cursos e estudos em áreas/assuntos que sei que são de grande importância para minha evolução pessoal, técnica e profissional.</p>
                            </div>
                        </div>

                        <div className="pl-4">
                            <div className="relative right-6 w-4 h-4 bg-gray-200 border-2 border-gray-950 rounded-full" />
                            <div className="relative bottom-5">
                                <h2 className="font-semibold text-lg font-sans">Desenvolvedor Backend</h2>
                                <p className="text-sm text-justify">Iniciei meus estudos aprofundados em backend no começo de 2023, com o NodeJs, desde lá, os caminhos que segui me levaram a aprender também Golang. Possuo conhecimento prático em criação e manutenção de APIs Restful seguras e escaláveis em ambientes de microsserviços, buscando sempre as tecnologias mais atuais e seguras para me auxiliar nesse processo. Possuo conhecimento prévio em banco de dados MySQL, PostgreSQL e MongoDB. Experiência também em designs patterns, principios SOLID, Arqutetura Hexagonal e POO.</p>
                            </div>
                        </div>

                        <div className="pl-4">
                            <div className="relative right-6 w-4 h-4 bg-gray-200 border-2 border-gray-950 rounded-full" />
                            <div className="relative bottom-5">
                                <h2 className="font-semibold text-lg font-sans">Experiência</h2>
                                <div className="flex bg-[#c3c4c8] p-[2px] rounded-xl">
                                    <div className="mt-2 mr-2 ml-1 w-2 h-2 rounded-full bg-black"></div>
                                    <h3 className="font-medium text-[15px] font-sans">Estágio em desenvolvimento back-end - <span className="italic text-[14px]">ACT - Ciência, tecnologia e inovação.</span></h3>
                                </div>
                                <p className="my-1 text-sm ml-4 text-justify">Projeto de formação de desenvolvedores que tive o prazer de fazer parte durante todos os 3 meses de duração. Fui responsável por desenvolver e dar manutenção em APIs Rest utilizando NodeJs, TypeScript e Express, juntamente com estrátegias de otimização de código como clean code, e POO, também metodologias ágeis como Scrum e Kanban e realização de testes unitários e testes de integração. Porém também tive contato com a criação de aplicações web front-end utilizando ReactJs e NextJs, assim como o portfólio que você está lendo nesse momento!</p>
                                <div className="flex bg-[#c3c4c8] p-[2px] rounded-xl">
                                    <div className="mt-2 mr-2 ml-1 w-2 h-2 rounded-full bg-black"></div>
                                    <h3 className="font-medium text-[15px] font-sans">Estágio em desenvolvimento back-end - <span className="italic text-[14px]">CCM Tecnologia</span></h3>
                                </div>
                                <p className="my-1 text-sm ml-4 text-justify">Responsável pelo desenvolvimento e manutenção de APIs Rest e Orientadas a Eventos em ambiente de microsserviços utilizando as linguagens NodeJs, TypeScript e Golang, utilizando também serviços de mensageria e plataformas Cloud como AWS e Oracle, sempre visando escalabilidade, segurança, e performance, utilizando metodologias como clean code, SOLID principles e scrum. Também fiz parte de projetos de integração de dados sendo responsável por criação de scripts para execução diária utilizando Python e Pandas.</p>
                            </div>
                        </div>

                    </div>
                    <Button variant="ghost" className="mt-4 underline rounded-lg text-gray-950 border border-gray-950" onClick={() => router.push('/projects')}>Conheça meus projetos</Button>
                </div>
            </div>
        </div>
    )
}