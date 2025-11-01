import "./footer.css"

export default function Footer({className}) {
    return(
        <div className={className}>
            <div className="footer-container">
                <p>&copy; 2025 S.E.C - Todos os direitos reservados.</p>
                <section className="footer-a">
                    <a href="https://github.com/Solucao-Emissao-Certificados" target="_blank" rel="">
                    <img src="https://unpwemjugtntyiedmdvc.supabase.co/storage/v1/object/public/images/github.png" alt="página do repositório" height={40}/>
                    </a>
                    <a href="/" class="logout-link"><img src="https://unpwemjugtntyiedmdvc.supabase.co/storage/v1/object/public/images/sair.png" alt="Sair da página" height={40}/></a>
                </section>
            </div>
        </div>
    )
}