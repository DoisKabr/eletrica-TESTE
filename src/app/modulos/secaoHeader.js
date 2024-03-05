import React from "react";

import estilo from "../estilos/secaoHeader.module.css"

export default function secaoHeader() {
    return (
        <>
            <section className={estilo.secaoHeader}>
                <div className={estilo.divAlinhadora}>
                    <div>
                        <h1>Elétrica <span>TopMax</span></h1>
                        <h3>Solicite seu orçamento.</h3>
                    </div>
                    <button>
                        <a href="#">
                            <img src="./social/whats.png" alt="botao-whatsapp-eletrica-topmax" />
                            <h3>Solicite</h3>
                        </a>
                    </button>
                </div>
                <img src="./images/alicate.png" alt="botao-alicate-eletrica-topmax" className={estilo.alicate} />
            </section>
        </>
    )
}