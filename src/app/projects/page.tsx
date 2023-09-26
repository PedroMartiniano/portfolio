import { Button } from "@/Components/Button";
import { Accordion } from "@/Components/Projects/Accordion";

export default function Projects() {
    return (
        <div className="min-h-screen pt-24">
            <h1 className="font-bold font-sans text-2xl lg:text-3xl mb-16 lg:ml-10">Projetos</h1>

            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 justify-start items-start p-5 border-b-2">
                <div className="flex flex-col w-full justify-center items-center">
                    <img src="nodejs.jpg" alt="foto-projeto" className="border-2 border-gray-950 rounded-md shadow-inner hover:brightness-90" />
                </div>
                <div className="flex flex-col justify-center items-start gap-5 lg:gap-10">
                    <h2 className="text-lg font-sans font-bold text-yellow-600">Meu projeto</h2>
                    <p className="text-sm lg:text-md text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ab, neque quisquam rem officiis nisi ea deleniti blanditiis, commodi iusto fugiat! Neque, in reprehenderit. Laudantium error doloremque maiores autem enim.</p>
                    <div className="self-center w-80">
                        <Button variant="ghost" className="rounded-lg underline text-gray-950">
                            <a href="">Acessar meu projeto aqui</a>
                        </Button>
                        <Button variant="ghost" className="rounded-lg underline font-thin text-gray-950">
                            <a href="">Este meu projeto no linkedin</a>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="border-b-2 border-gray-800 mx-10 lg:mx-20 w-auto" />

            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 justify-start items-start p-5 border-b-2">
                <div className="flex flex-col w-full justify-center items-center">
                    <img src="nodejs.jpg" alt="foto-projeto" className="border-2 border-gray-950 rounded-md shadow-inner hover:brightness-90" />
                </div>
                <div className="flex flex-col justify-center items-start gap-5 lg:gap-10">
                    <h2 className="text-lg font-sans font-bold text-yellow-600">Meu projeto</h2>
                    <p className="text-sm lg:text-md text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ab, neque quisquam rem officiis nisi ea deleniti blanditiis, commodi iusto fugiat! Neque, in reprehenderit. Laudantium error doloremque maiores autem enim.</p>
                    <div className="self-center w-80">
                        <Accordion />
                        <Button variant="ghost" className="rounded-lg underline font-thin text-gray-950">
                            <a href="">Este meu projeto no linkedin</a>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="border-b-2 border-gray-800 mx-10 lg:mx-20 w-auto" />

        </div>
    )
}