import { supabase } from '../../services/supabase'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EmptyUser from '../EmptiesMessage/EmptyUser';

import "./homecards.css"

export default function HomeCards({ className }) {
    const { id } = useParams();
    const [cursos, setCursos] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchCursos() {
            const { data, error } = await supabase
                .from("certificado")
                .select("*")
                .eq("user_assinantes", id)

            if (error) {
                console.error("Erro ao buscar Cursos: ", error);
                setCursos([]);
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
                {cursos.length > 0 ? (
                    <div className='cursos-cards'>
                        <h2>Bem vindo!</h2>
                        <div className='li-cards'>
                            {cursos.map((curso) => (
                                <div key={curso.id} className='curso-item'>
                                    <h2>{curso.nome}</h2><br />
                                    {curso.descricao}<br />
                                </div>
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
    )
}