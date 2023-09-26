import { Button } from "@/Components/Button";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";

export function AboutMe() {
    return (
        <div className="pt-20">
            <h1 className="font-bold font-sans text-2xl lg:text-3xl mb-8 lg:ml-10">Sobre mim</h1>
            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 justify-start items-start min-h-screen p-5">
                <div className="flex flex-col w-full justify-center items-center">
                    <img src="/foto-perfil.jpeg" alt="foto-perfil" className="rounded-full w-48 h-48 lg:w-72 lg:h-72 shadow-xl" />
                    <div className="flex w-full justify-center items-center gap-1 mt-5">
                        <Button variant="ghost" className="w-13 cursor-pointer">
                            <Linkedin />
                        </Button>
                        <Button variant="ghost" className="w-13 cursor-pointer">
                            <Github />
                        </Button>
                        <Button variant="ghost" className="w-13 cursor-pointer">
                            <Instagram />
                        </Button>
                    </div>
                </div>
                <div className="flex flex-col item-center justify-center">
                    <div className="flex flex-col gap-6 border-l-2 border-gray-950">
                        <div className="pl-4">
                            <div className="relative right-6 w-4 h-4 bg-gray-200 border-2 border-gray-950 rounded-full" />
                            <div className="relative bottom-5">
                                <h2 className="font-semibold text-lg font-sans">Eu</h2>
                                <p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus aliquid deleniti quia sed dolorum consectetur repellendus eaque cupiditate delectus exercitationem sapiente at voluptas assumenda, sit, voluptatibus quod omnis voluptates odio.</p>
                            </div>
                        </div>
                        <div className="pl-4">
                            <div className="relative bottom-5">
                                <div className="relative right-6 w-4 h-4 bg-gray-200 border-2 border-gray-950 rounded-full" />
                                <h2 className="font-semibold text-lg font-sans">Desenvolvedor Backend</h2>
                                <p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus aliquid deleniti quia sed dolorum consectetur repellendus eaque cupiditate delectus exercitationem sapiente at voluptas assumenda, sit, voluptatibus quod omnis voluptates odio.</p>
                            </div>
                        </div>

                        <div className="pl-4">
                            <div className="relative bottom-5">
                                <div className="relative right-6 w-4 h-4 bg-gray-200 border-2 border-gray-950 rounded-full" />
                                <h2 className="font-semibold text-lg font-sans">Estudante</h2>
                                <p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus aliquid deleniti quia sed dolorum consectetur repellendus eaque cupiditate delectus exercitationem sapiente at voluptas assumenda, sit, voluptatibus quod omnis voluptates odio.</p>
                            </div>
                        </div>
                    </div>
                    <Button variant="ghost" className="underline rounded-lg text-gray-950 border border-gray-950 ">Conheça meus projetos</Button>
                </div>
            </div>
        </div>
    )
}