import { Button } from "@/Components/Button";
import { Accordion } from "@/Components/Projects/Accordion";

export default function Projects() {
    return (
        <div className="min-h-screen pt-24">
            <h1 className="font-bold font-sans text-2xl lg:text-3xl mb-16 lg:ml-10">{'{ '}Projetos{' }'}</h1>

            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 justify-start items-start p-5 border-b-2 pt-20">
                <div className="flex flex-col w-full justify-center items-center">
                    <img src="/carrinho.png" alt="foto-projeto" className="p-5 border-2 border-gray-950 rounded-md shadow-inner hover:brightness-90" />
                </div>

                <div className="flex flex-col justify-center items-start gap-6 lg:gap-6">
                    <h2 className="text-xl font-sans font-bold text-yellow-600">Controle de Estoque Atacadista {'(Em Desenvolvimento...)'}</h2>
                    <p className="text-md lg:text-md text-justify">API Rest em desenvolvimento para o controle de estoque e venda de produtos de um atacado, utilizando os Designs Patterns Controller-Service-Repository e Factory para simples inversão de dependência, juntamente com orientação a objetos. A construção do banco de dados foi feita através de comandos SQL na plataforma MySQL Workbench e posteriormente conectada a API por meio da biblioteca query-builder KnexJs e a biblioteca mysql2. Foi implementada a biblioteca openai para auxílio da inteligência artificial no momento de avaliação de um produto, onde a IA identifica se o comentário postado pelo cliente foi negativo ou positivo. Também implementado testes unitários e de integração para boa manutenção do software.</p>
                    <h3 className="text-md font-sans font-semibold">Tecnologias: NodeJs, TypeScript, Fastify, JWT-Fastify, zod, uuid, Multer, KnexJs, mysql2, OpenAI, Vitest, entre outras!</h3>
                    <Button variant="outline" className="rounded-lg w-80">
                        <a href="https://github.com/PedroMartiniano/Estoque-Mercado" target="_blank">Acessar meu projeto no GitHub</a>
                    </Button>
                </div>
            </div>
            <div className="border-b-2 border-gray-800 mx-10 lg:mx-20 w-auto" />

            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 justify-start items-start p-5 border-b-2">
                <div className="flex flex-col w-full justify-center items-center">
                    <img src="/learnhub.png" alt="foto-projeto" className="border-2 border-gray-950 rounded-md shadow-inner hover:brightness-90" />
                </div>

                <div className="flex flex-col justify-center items-start gap-6 lg:gap-6">
                    <h2 className="text-xl font-sans font-bold text-yellow-600">LearnHub</h2>
                    <p className="text-md lg:text-md text-justify">Nesse projeto eu constriu uma API Rest para um website de venda de cursos, com funcionalidades como: CRUD completo de cursos e outras entidades, compra de cursos, cadastro de desafios para cada módulo dos cursos, login de professores e usuários com proteção das rotas por meio de tokens de acesso e muito mais! Foi utilizado o ambiente docker para virtualização do banco de dados enquanto a API estava em desenvolvimento.</p>
                    <h3 className="text-md font-sans font-semibold">Tecnologias: NodeJs, TypeScript, Express, Zod, JWT, Bcrypt, PrismaORM, MySQL, Vitest, Supertest, entre outras!</h3>
                    <Button variant="outline" className="rounded-lg w-80">
                        <a href="https://github.com/PedroMartiniano/LearnHub" target="_blank">Acessar meu projeto no GitHub</a>
                    </Button>
                </div>
            </div>
            <div className="border-b-2 border-gray-800 mx-10 lg:mx-20 w-auto" />

            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 justify-start items-start p-5 border-b-2 pt-20">
                <div className="flex flex-col w-full justify-center items-center">
                    <img src="/ordinis.jpg" alt="foto-projeto" className="w-96 border border-gray-950 rounded-md shadow-inner hover:brightness-90" />
                </div>

                <div className="flex flex-col justify-center items-start gap-6 lg:gap-6">
                    <h2 className="text-xl font-sans font-bold text-yellow-600">Ordinis</h2>
                    <p className="text-md lg:text-md text-justify">API Rest feita para um controle de patrimônio da Creche Municipal de Franca Nossa Senhora da Conceição. Ela inclui funcionalidades como: CRUD completo de diversas entidades presentes, controle de localização de cada patrimônio pertencente à creche, cadastro de toda manutenção feita nos patrimônios, assim como registro de todos os prestadores de serviço de manutenção de patrimônio da creche, login de funcionário juntamente com middlewares de verificação de permissão de usuário através de token e muito mais!</p>
                    <h3 className="text-md font-sans font-semibold">Tecnologias: NodeJs, TypeScript, Express, zod, JWT, Bcrypt, PrismaORM, PostgreSQL, entre outras!</h3>
                    <Button variant="outline" className="rounded-lg w-80">
                        <a href="https://github.com/PedroMartiniano/Ordinis" target="_blank">Acessar meu projeto no GitHub</a>
                    </Button>
                </div>
            </div>
            <div className="border-b-2 border-gray-800 mx-10 lg:mx-20 w-auto" />

            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 justify-start items-start p-5 border-b-2 pt-20">
                <div className="flex flex-col w-full justify-center items-center">
                    <img src="/learnhub.png" alt="foto-projeto" className="border-2 border-gray-950 rounded-md shadow-inner hover:brightness-90" />
                </div>

                <div className="flex flex-col justify-center items-start gap-6 lg:gap-6">
                    <h2 className="text-xl font-sans font-bold text-yellow-600">LearnHub - Fastify</h2>
                    <p className="text-md lg:text-md text-justify">API Rest feita com o mesmo intuíto do projeto LearnHub, porém abordando um diferente Design Pattern, estrutura de pastas, estratégias e tecnologias! Além de todas as funcionalidades do projeto LearnHub original, foram implantadas rotas para cadastro de imagem dos cursos, implantado swagger para documentação das rotas, teste unitários e de intregração, refresh token para reativação automática do token de login do usuário e algumas estratégias de reutilização de código!</p>
                    <h3 className="text-md font-sans font-semibold">Tecnologias: NodeJs, TypeScript, Fastify, JWT-Fastify, PrismaORM, Multer, Swagger, Vitest, MySQL, entre outras!</h3>
                    <Button variant="outline" className="rounded-lg w-80">
                        <a href="https://github.com/PedroMartiniano/Learnhub-Fastify" target="_blank">Acessar meu projeto no GitHub</a>
                    </Button>
                </div>
            </div>

        </div>
    )
}