export function LandingPage() {
    return (
        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 justify-center items-center h-screen">
            <div className="hidden lg:flex justify-center"> {/* hidden lg:block */}
                <img src="/boneco.png" alt="" className=" rounded-md w-2/3 animate-bounce-slow shadow-2xl" />
            </div>
            <div className="flex flex-col gap-6">

                <h1 className="font-sans font-extrabold text-3xl self-start">Olá, meu nome é <span className="text-yellow-600">Pedro Martiniano</span></h1>
                <h2 className="font-sans font-extrabold text-xl self-start">Sou um <span className="text-yellow-600">Desenvolvedor BackEnd</span></h2>
                <p className="text-sm">
                    Seja muito bem vindo ao meu portfólio! Aqui você descobrirá um pouco sobre minhas habilidades, tecnologias que trabalho e projetos feitos por mim até o momento.
                </p>
                <p className="text-sm">
                    Sou uma pessoa que busca estar em constante evolução e que é apaixado por tecnologia! Minha missão é desenvolver softwares seguros e eficientes, que sejam de grande utilidade para a sociedade.
                </p>
                <div className="flex flex-col gap-6 lg:flex-row">
                    <button className="w-full h-12 bg-gray-200 border border-gray-950 rounded-xl font-bold hover:brightness-90">Sobre Mim</button>
                    <button className="w-full h-12 text-white bg-yellow-600 border border-yellow-600 rounded-xl font-bold hover:bg-yellow-500 hover:border-yellow-500">Meus Projetos</button>
                </div>
            </div>
        </div>
    )
}