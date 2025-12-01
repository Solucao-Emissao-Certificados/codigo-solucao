import { supabase } from '../../services/supabase'
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import EmptyRepresentante from '../EmptiesMessage/EmptyRepresentante';

import "./homecertificados.css"

export default function HomeCertificados({ className }) {
    const { id } = useParams();
    const [certificados, setCertificados] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchCertificado() {
            const { data, error } = await supabase
                .from("certificado")
                .select("*")
                .eq("id_representante", id)


            if (error) {
                console.error("Erro ao buscar Documentos", error);
                setCertificados([]);
            } else {
                setCertificados(data);
            }
            setLoading(false);
        }

        fetchCertificado();
    }, [id]);

    if (loading) return <p>Carregando Documentos....</p>
    return (
        <div className={className}>
            <div className='home-container'>
                {certificados.length > 0 ? (
                    <div className='cursos-cards'>
                        <h2>Bem vindo!</h2>
                        <div className='li-cards'>
                            {certificados.map(certificado => (
                                <Link
                                    key={certificado.id}
                                    to={`/status`}
                                >
                                    <div className='certificado-item'>
                                        <h2>{certificado.nome}</h2>
                                        <p>{certificado.descricao}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                ) : (
                    <>
                    <EmptyRepresentante />
                    </>
                )}
            </div>
        </div>
    )
}