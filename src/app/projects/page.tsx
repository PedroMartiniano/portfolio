import { Button } from "@/Components/Button";
import { Accordion } from "@/Components/Projects/Accordion";

export default function Projects() {
    return (
        <div className="min-h-screen pt-24">
            <h1 className="font-bold font-sans text-2xl lg:text-3xl mb-16 lg:ml-10">{'{ '}Projetos{' }'}</h1>

            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 justify-start items-start p-5 border-b-2">
                <div className="flex flex-col w-full justify-center items-center">
                    <img src="/learnhub.png" alt="foto-projeto" className="border-2 border-gray-950 rounded-md shadow-inner hover:brightness-90" />
                </div>

                <div className="flex flex-col justify-center items-start gap-6 lg:gap-6">
                    <h2 className="text-xl font-sans font-bold text-yellow-600">LearnHub</h2>
                    <p className="text-md lg:text-md text-justify">Este é um de meus principais projetos! Nele, eu constriu uma API Rest para um website de venda de cursos, com funcionalidades como: cadastro de cursos, compra de cursos, cadastro de testes para módulos dos cursos, login de professores e usuários com proteção das rotas por meio de tokens de acesso e muito mais! Foi utilizado o ambiente docker para virtualização do banco de dados enquanto a API estava em desenvolvimento.</p>
                    <h3 className="text-md font-sans font-semibold">Tecnologias: NodeJs, TypeScript, ExpressJs, JWT{'(JsonWebToken)'}, bcrypt, PrismaORM, MySQL, vitest, supertest, entre outras.</h3>
                    <Button variant="ghost" className="rounded-lg border border-gray-950 w-80">
                        <a href="https://github.com/PedroMartiniano/LearnHub" target="_blank">Acessar meu projeto no GitHub</a>
                    </Button>
                </div>

            </div>
            <div className="border-b-2 border-gray-800 mx-10 lg:mx-20 w-auto" />

            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 justify-start items-start p-5 border-b-2 pt-20">
                <div className="flex flex-col w-full justify-center items-center">
                    <img src="/ordinis.jpg" alt="foto-projeto" className="w-96 border-2 border-gray-950 rounded-md shadow-inner hover:brightness-90" />
                </div>

                <div className="flex flex-col justify-center items-start gap-6 lg:gap-6">
                    <h2 className="text-xl font-sans font-bold text-yellow-600">Ordinis</h2>
                    <p className="text-md lg:text-md text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem animi consequuntur optio aliquid harum officia. Similique quibusdam voluptas est nesciunt voluptate quae quo, dolor eveniet provident explicabo ipsam soluta ullam!</p>
                    <h3 className="text-md font-sans font-semibold">Tecnologias: </h3>
                    <Button variant="ghost" className="rounded-lg underline border border-gray-950 w-80">
                        <a href="https://github.com/PedroMartiniano/ordinis" target="_blank">Acessar meu projeto no GitHub</a>
                    </Button>
                </div>

            </div>
            <div className="border-b-2 border-gray-800 mx-10 lg:mx-20 w-auto" />

        </div>
    )
}