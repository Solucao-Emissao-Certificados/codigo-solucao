import iconRepresentante from "../../../../img/IconRepresentante.png"
import styles from "../maincards.module.css"

export default function RepresentanteCard() {
    return(
        <div className={styles.mainCard}>
            <img 
                src={iconRepresentante} 
                alt="Icone do Representante" 
                className={styles.imgCard}
            />
            <h2>Representante</h2>
            <p>
                Responsável por criar certificados, atribuí-los a usuário e receber
                de volta os documentos assinados.
            </p>
        </div>
    )
}