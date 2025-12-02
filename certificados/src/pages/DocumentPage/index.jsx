import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { supabase } from "../../services/supabase"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

import "./documentpage.css"

export default function DocumentPages() {
    const { id } = useParams()
    const [certificado, setCertificado] = useState()

    useEffect(() => {
        async function docPage() {
            const { data, error } = await supabase
            .from("certificado")
            .select("*")
            .eq("id", id)
            .single()
    
            if (error) {
                console.log("Erro", error)
                return
            }
            setCertificado(data)
        }
        docPage();
    }, [id])

    if (!certificado) {
        return <p>Carregando documento... </p>
    }

    return(
        <>
        <Header  className="MainHeader"/>
        <div className="doc-page">
            <h2>Assinar Documento</h2>

            <div className="doc-container">
                <h3>{certificado.nome}</h3>

                <iframe 
                src={certificado.url} 
                className="doc-viewwe" 
                title={certificado.nome} 
                />

                <p>{certificado.descricao}</p>
                <Link to={`/assinatura/${certificado.id}`}>Assinar Documento</Link>
            </div>
        </div>
        <Footer className="footer"/>
        </>
    )
}