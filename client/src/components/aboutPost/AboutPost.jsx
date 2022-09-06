import "./aboutPost.css";

export default function AboutPost() {

    return (
        <div className="aboutPost">
            <div className="aboutPostWrapper">
                <img className="aboutPostImg" src="/about.jpg" alt=""/>
                <h1 className="aboutPostTitle">Sobre o site</h1>
                <p className="aboutPostDesc">Meu nome é Raul Philipe Vieira, sou estudante de Análise e Desenvolvimento de Sistemas, interessado por programação e tecnologia no geral, o blog "TechSync" foi criado como parte de um projeto acadêmico do curso de ánalise e desenvolvimento de sistemas, foi desenvolvido utilizando HTML, CSS, React, JS e como banco de dados foi utilizado o MongoDB Cloud, as imagens utilizadas no Blog foram todas retiradas do PixaBay e são de licensa gratuita tanto para uso comercial quanto para uso não comercial, o favicon da página foi tirado do site IconArchive e os ícones do FontAwesome.<br/>
                O site cumpre o requisito de ter pelo menos 4 páginas, possui sistema de login e registro, o contéudo do site pode ser alterado dinamicamente atráves de três funções CRUD, criar, atualizar e excluir os posts e as informações gerenciadas são salvas no banco de dados.</p>
            </div>
        </div>
    )
}
