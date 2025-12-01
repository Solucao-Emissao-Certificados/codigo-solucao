import { useState, useEffect } from "react";
import { supabase } from "../../../services/supabase";
import { useParams } from "react-router-dom";

export default function MainStatus() {
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
        <div>
            <div>
                <h2>Status</h2>
            </div>
            <div>
                {certificados.status === "Assinado" ? (
                    <div>
                        <h2>Assinado!!!!</h2>
                        <img src="https://unpwemjugtntyiedmdvc.supabase.co/storage/v1/object/public/images/happiness.png" alt="carinha feliz icon" height={50}/>
                    </div>
                ) : (
                    <div>
                        <h2>Pendente</h2>
                        <img src="https://unpwemjugtntyiedmdvc.supabase.co/storage/v1/object/public/images/sad.png" alt="carinha triste icon" height={50}/>
                    </div>
                )}
            </div>
        </div>
    )
}