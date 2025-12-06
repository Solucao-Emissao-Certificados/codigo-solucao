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
