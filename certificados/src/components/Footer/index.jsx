import github from "../../img/github.png"
import sair from "../../img/sair.png"

import "./footer.css"

export default function Footer({className}) {
    return(
        <div className={className}>
            <div className="footer-container">
                <p>&copy; 2025 S.E.C - Todos os direitos reservados.</p>
                <section className="footer-a">
                    <a href="https://github.com/lucasdpsa01/codigo-solucao-monitoria.git" target="_blank" rel="">
                    <img src={github} alt="página do repositório" height={40}/>
                    </a>
                    <a href="/" class="logout-link"><img src={sair} alt="Sair da página" height={40}/></a>
                </section>
            </div>
        </div>
    )
}