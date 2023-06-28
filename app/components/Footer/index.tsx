'use client'

import Legal from "./Legal"

const Footer = () => {
    return(
        <div className="bg-black p-4">
            <Legal>{`2023 © Desenvolvido por Alura |${<br />} Projeto fictício sem fins comerciais.`}</Legal>
        </div>
    )
}

export default Footer