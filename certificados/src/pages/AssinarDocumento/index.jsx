import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../../services/supabase";
import SignatureCanvas from "react-signature-canvas";
import { DocusealForm } from '@docuseal/react'

export default function AssinarDocumento() {


    return (
        <div className="assina">
            <DocusealForm
                src="https://docuseal.com/d/LEVGR9rhZYf86M"
                email="signer@example.com"
                onComplete={(data) => console.log(data)}
            />
        </div>
    );
}
