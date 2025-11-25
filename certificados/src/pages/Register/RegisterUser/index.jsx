import { useState } from "react"
import { supabase } from "../../../services/supabase"

export default function RegisterUser() {
    return (
        <div>
            <div>
                <h2>Cadastro User</h2>
                <form>
                    <label>
                        Nome
                        <input type="text"/>
                    </label>
                    <label>
                        Telefone
                        <input type="telefone"/>
                    </label>
                    <label>
                        Email
                        <input type="email"/>
                    </label>
                    <label>
                        Senha
                        <input type="password"/>
                    </label>
                </form>
            </div>
        </div>
    )
}