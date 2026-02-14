import UserTemplate from "../../templates/user-template";

import team1 from "../../assets/team1.png";
import team2 from "../../assets/team2.png";
import team3 from "../../assets/team3.png";

export default function QuemSomos() {
    return(
        <UserTemplate title="Quem Somos">
            
            <div className="max-w-5xl mx-auto">

            <div className="w-full h-[280px] bg-primary rounded-lg flex items-center justify-center mb-8">
                <h1 className="text-white text-[36px] font-bold">Conheça a Unyban</h1>
            </div>

            <p className="mb-4">
                A <strong>Unyban</strong> é uma plataforma digital fictícia desenvolvida como parte de um projeto acadêmico,
                com o propósito de simular um ambiente de compra e venda de produtos entre usuários de forma prática e organizada.
            </p>
            
            <p className="mb-4">
                O sistema foi idealizado para atender pessoas que desejam anunciar produtos de maneira simples,
                oferecendo uma navegação intuitiva, categorias bem definidas e recursos que facilitam a busca
                por itens de interesse.
            </p>
            
            <p className="mb-6">
                Mais do que um espaço de comércio, a Unyban foi pensada como uma solução tecnológica que promove
                o aprendizado, a inovação e a aplicação de conceitos de desenvolvimento web modernos.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-10">

            <div className="shadow-md p-6 rounded-lg bg-white transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:bg-gray-50 cursor-pointer">
                <h2 className="text-[22px] font-bold mb-3">Nossa Missão</h2>
                <p>
                    Criar uma plataforma digital acessível que permita aos usuários divulgar e encontrar produtos
                    com facilidade, estimulando a comunicação direta e a troca de experiências.
                </p>
            </div>

            <div className="shadow-md p-6 rounded-lg bg-white transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:bg-gray-50 cursor-pointer">
                <h2 className="text-[22px] font-bold mb-3">Nossa Visão</h2>
                <p>
                    Tornar-se um ambiente virtual reconhecido pela organização, simplicidade e pela qualidade
                    das interações entre seus usuários.
                </p>
            </div>

            <div className="shadow-md p-6 rounded-lg bg-white transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:bg-gray-50 cursor-pointer">
                <h2 className="text-[22px] font-bold mb-3">Nossos Valores</h2>
                
                <ul className="list-disc ml-5">
                    <li>Compromisso com a experiência do usuário</li>
                    <li>Responsabilidade digital</li>
                    <li>Transparência nas informações</li>
                    <li>Inovação contínua</li>
                    <li>Respeito à diversidade</li>
                </ul>
            </div>
            </div>
            
            <h2 className="text-[28px] font-bold mt-12 mb-6 text-center">Nossa Equipe</h2>
            
            <p className="text-center mb-8">
                A equipe da Unyban é formada por estudantes e desenvolvedores que buscam aplicar na prática
                os conhecimentos adquiridos ao longo do curso, utilizando tecnologias modernas para construir
                soluções funcionais e educativas.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
                <div className="shadow-md p-6 rounded-lg text-center bg-white">
                    <div className="w-28 h-28 mx-auto mb-3 rounded-full overflow-hidden border-3 bg-gray-300">
                        <img src={team1} alt="Lucas Andrade" className="w-full h-full object-cover"/>
                    </div>
                    <h3 className="font-bold">Lucas Andrade</h3>
                    <p>Desenvolvedor Front-end</p>
                </div>
                <div className="shadow-md p-6 rounded-lg text-center bg-white">
                    <div className="w-28 h-28 mx-auto mb-3 rounded-full overflow-hidden border-3 bg-gray-300">
                        <img src={team3} alt="Mariana Lopes" className="w-full h-full object-cover"/>
                    </div>
                    <h3 className="font-bold">Mariana Lopes</h3>
                    <p>Designer de Interface</p>
                </div>
                <div className="shadow-md p-6 rounded-lg text-center bg-white">
                    <div className="w-28 h-28 mx-auto mb-3 rounded-full overflow-hidden border-3 bg-gray-300">
                        <img src={team2} alt="Rafael Costa" className="w-full h-full object-cover"/>
                    </div>
                    <h3 className="font-bold">Rafael Costa</h3>
                    <p>Analista de Sistemas</p>
                </div>
            </div>

        </div>
    </UserTemplate>
    )
}