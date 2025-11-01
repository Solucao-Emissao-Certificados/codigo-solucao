import iconRepresentante from "../../../../img/IconRepresentante.png"
import styles from "../maincards.module.css"

export default function RepresentanteCard() {
    return(
        <div className={styles.mainCard}>
            <img 
                src="https://unpwemjugtntyiedmdvc.supabase.co/storage/v1/object/public/images/IconRepresentante.png" 
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