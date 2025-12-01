import { supabase } from '../../services/supabase'
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import EmptyUser from '../EmptiesMessage/EmptyUser';

import "./homecards.css"

export default function HomeCards({ className }) {
    const { id } = useParams();
    const [certificados, setCertificados] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchCertificados() {
            const { data, error } = await supabase
                .from("certificado")
                .select("*")
                .eq("user_assinantes", id);

            if (error) {
                console.error("Erro ao buscar certificados: ", error);
                setCertificados([]);  // deixa vazio
            } else {
                setCertificados(data); // salva os dados
            }

            setLoading(false);
        }

        fetchCertificados();
    }, [id]);

    if (loading) return <p>Carregando Certificados...</p>;
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
                                    to={`/certificado/${certificado.id}`}
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
                    <EmptyUser />
                    </>
                )}
            </div>
        </div>
    );
}
