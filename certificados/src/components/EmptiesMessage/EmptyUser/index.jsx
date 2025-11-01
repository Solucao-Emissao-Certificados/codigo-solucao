import "./emptyuser.css"

export default function EmptyUser() {
    return (
        <div className="non-certificado-home">
            <img src="https://unpwemjugtntyiedmdvc.supabase.co/storage/v1/object/public/images/UserEmpty.png" alt="icone de certificados vazios" className='non-home-img' />
            <h2>Bem vindo</h2>
            <p>Parece que você ainda não possui nenhum certificado vinculado ao  seu email,
                solicite ao seu representante adicione o email ao certificado que deseja
                preencher e garanta que o email seja válido.
            </p>
        </div>
    )
}