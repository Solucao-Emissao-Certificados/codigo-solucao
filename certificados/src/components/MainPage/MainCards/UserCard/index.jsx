import iconUser from "../../../../img/IconUser.png"
import styles from "../maincards.module.css"

export default function UserCard() {
    return(
        <div className={styles.mainCard}>
            <img 
                src={iconUser}
                 alt="Icone do Usuário"
                className={styles.imgCard}
            />
            <h2>Usuário</h2>
            <p>
                Responsável os certificados recebidos em seu e-mail vinculado,
                realizar a assinatura eletrônica e retornar um certificado ao
                representante.
            </p>
        </div>
    )
}