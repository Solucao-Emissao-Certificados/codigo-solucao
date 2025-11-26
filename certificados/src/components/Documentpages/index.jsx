import { useEffect, useState } from "react"

export default function DocumentPages() {

    const [certificado, setCertificado] = useState()
    useEffect(() => {
        async function docPage() {
            const { data, error } = await supabase
            .from("certificado")
            .select("*")
            .eq("id", id)
    
            if (error) {
                console.log("Erro", error)
                setCertificado([])
            } else {
                setCertificado(data)
            }
        }

        docPage();
        
    }, [id])

    return(
        <div>
            certificados
        </div>
    )
}