import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../../services/supabase";
import SignatureCanvas from "react-signature-canvas";

export default function AssinarDocumento() {
    const { id } = useParams();
    const sigCanvas = useRef();

    const [certificado, setCertificado] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadCertificado() {
            const { data, error } = await supabase
                .from("certificado")
                .select("*")
                .eq("id", id)
                .single();

            if (!error) {
                setCertificado(data);
            }
            setLoading(false);
        }

        loadCertificado();
    }, [id]);

    function handleAssinar() {
        const assinaturaPNG = sigCanvas.current
            .getTrimmedCanvas()
            .toDataURL("image/png");

        localStorage.setItem("assinatura", assinaturaPNG);

        alert("Assinatura capturada!");
    }

    if (loading) return <p>Carregando documento...</p>;

    return (
        <div>
            <h2>Assinar Documento</h2>

            <iframe
                src={certificado.url}
                title="documento"
            />
            <h3>Desenhe sua assinatura abaixo:</h3>

            <SignatureCanvas
                ref={sigCanvas}
                penColor="black"
                canvasProps={{
                    width: 500,
                    height: 200,
                    className: "sigCanvas",
                    style: { border: "1px solid #000" }
                }}
            />

            <div style={{ marginTop: 10 }}>
                <button onClick={() => sigCanvas.current.clear()}>
                    Limpar
                </button>

                <button onClick={handleAssinar} style={{ marginLeft: 10 }}>
                    Confirmar Assinatura
                </button>
            </div>
        </div>
    );
}
