import CampoDigitacao from "../CampoDigitacao";
import { useState } from 'react';

export default function Login() {
    const [email, setEmail] = useState('')
    return (
        <>
            <CampoDigitacao
                valor={email}
                tipo="text"
                placeholder="Insira seu endereço de e-mail"
                onChange={setEmail}
                label="Email" />
        </>
    )
}