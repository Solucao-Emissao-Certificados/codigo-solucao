import { useState, useEffect } from "react";
import { supabase } from "../../../services/supabase";
import { useParams } from "react-router-dom";

import "./mainstatus.css"

export default function MainStatus({ className }) {
    const { id } = useParams();
    const [certificados, setCertificados] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchStatus() {
            const { data, error } = await supabase
                .from("certificado")
                .select("*")
                .eq("id_representante", id)
                .single()


            if (error) {
                console.error("Erro ao buscar Documentos", error);
                setCertificados([]);
            } else {
                setCertificados(data);
            }
            setLoading(false);
        }

        fetchStatus();
    }, [id]);
    
    return(
        <div className={className}>
            <div className="status-title">
                <h2>Status</h2>
            </div>
            <div className="status-container">
                {certificados.status === "Assinado" ? (
                    <div className="status-assinado">
                        <img src="https://unpwemjugtntyiedmdvc.supabase.co/storage/v1/object/public/images/happiness.png" alt="carinha feliz icon" height={90}/>
                        <h3>Assinado!!!!</h3>
                    </div>
                ) : (
                    <div className="status-pendente">
                        <img src="https://unpwemjugtntyiedmdvc.supabase.co/storage/v1/object/public/images/sad.png" alt="carinha triste icon" height={90}/>
                        <h3>Pendente</h3>
                    </div>
                )}
            </div>
        </div>
    )
}