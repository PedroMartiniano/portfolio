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
                    <img src="/foto-perfil-ccm.jpg" alt="foto-perfil" className="rounded-full w-48 h-48 lg:w-72 lg:h-72 shadow-xl" />
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
                                <p className="text-sm text-justify">Meu nome é Pedro Paulino Martiniano, tenho 20 anos e sou um desenvolvedor back-end! Iníciei no mundo da programação como quase todo mundo, aprendendo HTML, CSS e  JavaScript, e fui progredindo para bibliotecas e frameworks como o ReactJs e NextJs, porém descobri que minha verdadeira paixão é o BackEnd, onde eu estou depositando todas minhas horas de estudo diário para me aprofundar cada dia mais nesse mundo!</p>
                            </div>
                        </div>

                        <div className="pl-4">
                            <div className="relative right-6 w-4 h-4 bg-gray-200 border-2 border-gray-950 rounded-full" />
                            <div className="relative bottom-5">
                                <h2 className="font-semibold text-lg font-sans">Estudante</h2>
                                <p className="text-sm text-justify">Atualmente estou cursando o 7º semestre de Engenharia de Software na Uni-FACEF, onde iniciei meus estudos em fevereiro de 2022, com previsão de término em 2025, possuo quatro certificações de reconhecimento pela melhor média da minha turma no semestre, e três certificações Banco de Dados Oracle. Também sou apaixonado por aprender coisas novas e aprimorar minhas habilidades, e por isso, estou sempre em busca de cursos e estudos em áreas/assuntos que sei que são de grande importância para minha evolução pessoal, técnica e profissional.</p>
                            </div>
                        </div>

                        <div className="pl-4">
                            <div className="relative right-6 w-4 h-4 bg-gray-200 border-2 border-gray-950 rounded-full" />
                            <div className="relative bottom-5">
                                <h2 className="font-semibold text-lg font-sans">Desenvolvedor Backend</h2>
                                <p className="text-sm text-justify">Iniciei meus estudos aprofundados em backend no começo do ano de 2023, com o NodeJs, desde lá, os caminhos que segui me levaram a aprender Golang e Python, linguagens na qual atuo atualmente. Possuo conhecimento prático em criação e manutenção de APIs Restful seguras e escaláveis em ambientes de microsserviços, buscando sempre as tecnologias mais atuais para me auxiliar nesse processo. Possuo conhecimento prévio em banco de dados SQL e NoSQL. Experiência também em criação de aplicações RAG utilizando Python e frameworks de multi-agentes de Inteligência Artificial como LangChain, LangGraph e CrewAI, e designs patterns, principios SOLID, Arqutetura Hexagonal, DDD e POO.</p>
                            </div>
                        </div>

                        <div className="pl-4">
                            <div className="relative right-6 w-4 h-4 bg-gray-200 border-2 border-gray-950 rounded-full" />
                            <div className="relative bottom-5">
                                <h2 className="font-semibold text-lg font-sans">Experiência</h2>

                                <div className="flex bg-[#c3c4c8] p-[2px] rounded-xl">
                                    <div className="mt-2 mr-2 ml-1 w-2 h-2 rounded-full bg-black"></div>
                                    <h3 className="font-medium text-[15px] font-sans">Engenheiro de Software Backend - <span className="italic text-[14px]">Mercado Livre</span> | Junho 2025 - Atualmente</h3>
                                </div>
                                <p className="my-1 text-sm ml-4 text-justify">Como parte do time de Excelência Operacional LATAM no Mercado Livre, atuo no design e desenvolvimento de microsserviços de alta performance em Golang, com o objetivo de aprimorar a eficiência, confiabilidade, escalabilidade e qualidade dos processos logísticos internos. Meu trabalho é focado na entrega de soluções robustas de backend que suportam fluxos operacionais essenciais em diversos países da América Latina, garantindo a melhoria contínua e a excelência do nosso ecossistema logístico.</p>

                                <div className="flex bg-[#c3c4c8] p-[2px] rounded-xl">
                                    <div className="mt-2 mr-2 ml-1 w-2 h-2 rounded-full bg-black"></div>
                                    <h3 className="font-medium text-[15px] font-sans">Desenvolvedor Back-End Júnior - <span className="italic text-[14px]">CCM Tecnologia</span> | Agosto 2024 - Junho 2025</h3>
                                </div>
                                <p className="my-1 text-sm ml-4 text-justify">Atuando no time de P&D da CCM Tecnologia, sou responsável pelo desenvolvimento e manutenção de APIs Rest e Orientadas a Eventos de alto nível em ambiente de microsserviços utilizando Golang e Node.js, trabalhando também com serviços de mensageria e plataformas Cloud como AWS e OCI, sempre visando escalabilidade, segurança, e performance, utilizando metodologias como clean code, SOLID principles, Hexagonal Architecture e Scrum. Também fiz parte de projetos de integração de dados sendo responsável por criação de scripts para execução em Cron Jobs utilizando Python e Pandas. E também desenvolvi aplicações RAG utilizando Python e frameworks de multi-agentes de Inteligência Artificial como LangChain, LangGraph e CrewAI.</p>

                                <div className="flex bg-[#c3c4c8] p-[2px] rounded-xl">
                                    <div className="mt-2 mr-2 ml-1 w-2 h-2 rounded-full bg-black"></div>
                                    <h3 className="font-medium text-[15px] font-sans">Estágio em desenvolvimento back-end - <span className="italic text-[14px]">CCM Tecnologia</span> | Dezembro 2023 - Agosto 2024</h3>
                                </div>
                                <p className="my-1 text-sm ml-4 text-justify">Durante meu estágio no time de P&D da CCM Tecnologia, participei no suporte ao desenvolvimento e manutenção de APIs Rest e microsserviços, utilizando Golang e Node.js. Contribuí na implementação de serviços de mensageria e trabalhei com plataformas Cloud como AWS e OCI. Apoiei projetos de integração de dados, criando scripts em Python para execução em Cron Jobs, sempre colaborando com a equipe para aplicar boas práticas como clean code e SOLID principles.</p>

                                <div className="flex bg-[#c3c4c8] p-[2px] rounded-xl">
                                    <div className="mt-2 mr-2 ml-1 w-2 h-2 rounded-full bg-black"></div>
                                    <h3 className="font-medium text-[15px] font-sans">Estágio em desenvolvimento back-end - <span className="italic text-[14px]">ACT - Ciência, tecnologia e inovação</span> | Julho 2023 - Setembro 2023</h3>
                                </div>
                                <p className="my-1 text-sm ml-4 text-justify">Projeto de formação de desenvolvedores que tive o prazer de fazer parte durante todos os 3 meses de duração. Fui responsável por desenvolver e dar manutenção em APIs Rest utilizando NodeJs, TypeScript e Express, juntamente com estrátegias de otimização de código como clean code, e POO, também metodologias ágeis como Scrum e Kanban e realização de testes unitários e testes de integração. Porém também tive contato com a criação de aplicações web front-end utilizando ReactJs e NextJs, assim como o portfólio que você está lendo nesse momento!</p>

                            </div>
                        </div>

                    </div>
                    <Button variant="ghost" className="mt-4 underline rounded-lg text-gray-950 border border-gray-950" onClick={() => router.push('/projects')}>Conheça meus projetos</Button>
                </div>
            </div>
        </div>
    )
}