import { supabase } from '../../services/supabase'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import userEmpty from "../../img/UserEmpty.png"

import "./homecards.css"

export default function HomeCards({ className }) {
    const { id } = useParams();
    const [cursos, setCursos] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchCursos() {
            const { data, error } = await supabase
                .from("cursos")
                .select("*")
                .eq("id", id)
                .single();

            if (error) {
                console.error("Erro ao buscar Cursos", error);
                setCursos(null);
            } else {
                setCursos(data);
            }
            setLoading(false);
        }

        fetchCursos();
    }, [id]);

    if (loading) return <p>Carregando Cursos....</p>
    return (
        <div className={className}>
            <div className='home-container'>
                {cursos ? (
                    <div className='cursos-cards'>
                        <h2>Bem vindo, {cursos.nome}!</h2>
                        <p>Seu ID é: {cursos.id}</p>
                        {/* Aqui você pode colocar o restante do conteúdo */}
                    </div>
                ) : (
                    <div className="non-certificado-home">
                        <img src={userEmpty} alt="icone de certificados vazios" className='non-home-img'/>
                        <h2>Bem vindo</h2>
                        <p>Parece que você ainda não possui nenhum certificado vinculado ao  seu email,
                            solicite ao seu representante adicione o email ao certificado que deseja
                            preencher e garanta que o email seja válido.
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}