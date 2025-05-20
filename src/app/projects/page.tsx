import { Button } from "@/Components/Button";
import { Accordion } from "@/Components/Projects/Accordion";

export default function Projects() {
    return (
        <div className="min-h-screen pt-24">
            <h1 className="font-bold font-sans text-2xl lg:text-3xl mb-16 lg:ml-10">{'{ '}Projetos{' }'}</h1>

            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 justify-start items-start p-5 border-b-2 pt-20">
                <div className="flex flex-col w-full justify-center items-center">
                    <img src="/golang.png" alt="foto-projeto" className="p-5 border-2 border-gray-950 rounded-md shadow-inner hover:brightness-90" width="500" height="400"/>
                </div>

                <div className="flex flex-col justify-center items-start gap-6 lg:gap-6">
                    <h2 className="text-xl font-sans font-bold text-yellow-600">E-commerce Microsserviços</h2>
                    <p className="text-md lg:text-md text-justify">Microsserviços construidos utilizando a linguagem Go, com o framework Gin Gonic, para o desenvolvimento de APIs Rest, e para o banco de dados foi utilizado o PostgreSQL. Para o gerenciamento de filas foi utilizado o RabbitMQ e para o gerenciamento do projeto foi utilizado o Docker e Docker Compose, e para finalizar, foi utilizado Redis para o cache das consultas frequentes ao banco de dados. As APIs foram construídas utilizando o padrão de arquitetura hexagonal, SOLID principles, DDD e Clean Architecture.</p>
                    <h3 className="text-md font-sans font-semibold">Tecnologias: Golang, Gin Gonic, Docker, Docker Compose, PostgreSQL, RabbitMQ, Redis, Swagger, entre outras!</h3>
                    <Button variant="outline" className="rounded-lg w-80">
                        <a href="https://github.com/PedroMartiniano/ecommerce" target="_blank">Acessar este projeto no GitHub</a>
                    </Button>
                </div>
            </div>
            <div className="border-b-2 border-gray-800 mx-10 lg:mx-20 w-auto" />

            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 justify-start items-start p-5 border-b-2 pt-20">
                <div className="flex flex-col w-full justify-center items-center">
                    <img src="/estruturas-de-dados.jpg" alt="foto-projeto" className="p-5 border-2 border-gray-950 rounded-md shadow-inner hover:brightness-90" width="500" height="400"/>
                </div>

                <div className="flex flex-col justify-center items-start gap-6 lg:gap-6">
                    <h2 className="text-xl font-sans font-bold text-yellow-600">Algoritmos & Estruturas de Dados</h2>
                    <p className="text-md lg:text-md text-justify">Repositório do curso de treinamento em algoritmos avançados e estruturas de dados que realizei com intuíto de me aprimorar como um desenvolvedor. Nesse curso, abordei padrões de resolução de problemas, algoritmos de ordenação, Grafo, Árvore, algoritmos de busca como Binary Search, Algoritmo de Dijkstra e Hash Tables.</p>
                    <h3 className="text-md font-sans font-semibold">Tecnologias: JavaScript, Typescript, Problem Solving, Algoritms & Data Structures!</h3>
                    <Button variant="outline" className="rounded-lg w-80">
                        <a href="https://github.com/PedroMartiniano/data-structure" target="_blank">Acessar este projeto no GitHub</a>
                    </Button>
                </div>
            </div>
            <div className="border-b-2 border-gray-800 mx-10 lg:mx-20 w-auto" />

            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 justify-start items-start p-5 border-b-2 pt-20">
                <div className="flex flex-col w-full justify-center items-center">
                    <img src="/carrinho.png" alt="foto-projeto" className="p-5 border-2 border-gray-950 rounded-md shadow-inner hover:brightness-90" />
                </div>

                <div className="flex flex-col justify-center items-start gap-6 lg:gap-6">
                    <h2 className="text-xl font-sans font-bold text-yellow-600">Controle de Estoque Atacadista</h2>
                    <p className="text-md lg:text-md text-justify">API Rest de controle de estoque e venda de produtos de um atacado, utilizando os Designs Patterns Controller-Service-Repository e Factory para melhor controle de injeção de dependência, juntamente com orientação a objetos. A construção do banco de dados foi feita através de scripts DDL no SGBD MySQL Workbench e posteriormente conectada a API por meio da biblioteca query-builder KnexJs e a biblioteca mysql2. Foi implementada a biblioteca openai para análise de sentimentos, onde a IA identifica se o comentário postado pelo cliente foi negativo ou positivo. Também implementado testes unitários e de integração para manutenção contínua do software.</p>
                    <h3 className="text-md font-sans font-semibold">Tecnologias: NodeJs, TypeScript, Fastify, JWT-Fastify, zod, uuid, Multer, KnexJs, mysql2, OpenAI, Vitest, entre outras!</h3>
                    <Button variant="outline" className="rounded-lg w-80">
                        <a href="https://github.com/PedroMartiniano/Estoque-Mercado" target="_blank">Acessar este projeto no GitHub</a>
                    </Button>
                </div>
            </div>
            <div className="border-b-2 border-gray-800 mx-10 lg:mx-20 w-auto" />

            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 justify-start items-start p-5 border-b-2">
                <div className="flex flex-col w-full justify-center items-center">
                    <img src="/learnhub.png" alt="foto-projeto" className="border-2 border-gray-950 rounded-md shadow-inner hover:brightness-90" />
                </div>

                <div className="flex flex-col justify-center items-start gap-6 lg:gap-6">
                    <h2 className="text-xl font-sans font-bold text-yellow-600">LearnHub - Express</h2>
                    <p className="text-md lg:text-md text-justify">Nesse projeto eu constriu uma API Rest para um website de venda de cursos, com funcionalidades como: CRUD completo de cursos e outras entidades, compra de cursos, cadastro de desafios para cada módulo dos cursos, login de professores e usuários com proteção das rotas por meio de middlewares de autenticação e permissão utilizando tokens JWT e muito mais! Para o design da API, foi utilizado o design pattern Controller-Service, onde optei por nomear o service de Use Case, foi utilizado também o ambiente docker para virtualização do banco de dados MySQL enquanto a API estava em desenvolvimento.</p>
                    <h3 className="text-md font-sans font-semibold">Tecnologias: NodeJs, TypeScript, Express, Zod, JWT, Bcrypt, PrismaORM, MySQL, Vitest, Supertest, entre outras!</h3>
                    <Button variant="outline" className="rounded-lg w-80">
                        <a href="https://github.com/PedroMartiniano/LearnHub" target="_blank">Acessar este projeto no GitHub</a>
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
                    <p className="text-md lg:text-md text-justify">API Rest feita para um controle de patrimônio da Creche Municipal de Franca Nossa Senhora da Conceição. Ela inclui funcionalidades como: CRUD completo de diversas entidades presentes, controle de localização de cada patrimônio pertencente à creche, cadastro de toda manutenção feita nos patrimônios, assim como registro de todos os prestadores de serviço de manutenção de patrimônio da creche, login de funcionário juntamente com middlewares de verificação de permissão de usuário através de token, foi realizado também testes E2E de todas as rotas utilizando as bibliotecas Vitest e Supertest.</p>
                    <h3 className="text-md font-sans font-semibold">Tecnologias: NodeJs, TypeScript, Express, zod, JWT, Bcrypt, PrismaORM, PostgreSQL, Vitest, Supertest, entre outras!</h3>
                    <Button variant="outline" className="rounded-lg w-80">
                        <a href="https://github.com/PedroMartiniano/Ordinis" target="_blank">Acessar este projeto no GitHub</a>
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
                    <p className="text-md lg:text-md text-justify">API Rest feita com o mesmo intuíto e funcionalidades do projeto LearnHub mencionado acima, porém abordando um diferente Design Pattern, estrutura de pastas, estratégias e tecnologias! Além de todas as funcionalidades do projeto LearnHub original, foram implantadas rotas para cadastro de imagem dos cursos, implantado swagger para documentação das rotas, teste unitários e de intregração, refresh token para reativação automática do token de login do usuário e algumas estratégias de reutilização de código por meio de programação orientada a objetos!</p>
                    <h3 className="text-md font-sans font-semibold">Tecnologias: NodeJs, TypeScript, Fastify, JWT-Fastify, PrismaORM, Multer, Swagger, Vitest, MySQL, entre outras!</h3>
                    <Button variant="outline" className="rounded-lg w-80">
                        <a href="https://github.com/PedroMartiniano/Learnhub-Fastify" target="_blank">Acessar este projeto no GitHub</a>
                    </Button>
                </div>
            </div>
            <div className="border-b-2 border-gray-800 mx-10 lg:mx-20 w-auto" />

            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 justify-start items-start p-5 border-b-2 pt-20">
                <div className="flex flex-col w-full justify-center items-center">
                    <img src="/nestjs.png" alt="foto-projeto" className="border-2 border-gray-950 rounded-md w-[80%] shadow-inner hover:brightness-90" />
                </div>

                <div className="flex flex-col justify-center items-start gap-6 lg:gap-6">
                    <h2 className="text-xl font-sans font-bold text-yellow-600">Estudo framework NestJs</h2>
                    <p className="text-md lg:text-md text-justify">API Rest feita somente para estudos dos conceitos como decorators, pipes, DTO, guards e interceptors, para a construção de um servidor NodeJs com o framework NestJs de maneira completa. Também para estudo da implementação do token JWT juntamente com verificações de segurança pelos meios que o NestJs disponibiliza, e muitas outra funcionalidades como envio de arquivos, envio de email e implementação em um banco de dados MySQL existente através do PrismaORM e TypeORM.</p>
                    <h3 className="text-md font-sans font-semibold">Tecnologias: NodeJs, TypeScript, NestJs, JWT, class-validator, class-transformer, MySQL, Prisma, entre outras!</h3>
                    <Button variant="outline" className="rounded-lg w-80">
                        <a href="https://github.com/PedroMartiniano/estudo-nestjs" target="_blank">Acessar este projeto no GitHub</a>
                    </Button>
                </div>
            </div>

        </div>
    )
}