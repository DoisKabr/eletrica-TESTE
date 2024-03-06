/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useEffect, useState } from "react";

import estilo from "../estilos/secaoHeader.module.css"

export default function secaoHeader() {

    const [moverTitulo, setMoverTitulo] = useState(false);
    const [moverOrcamento, setMoverOrcamento] = useState(false);
    const [moverButton, setMoverButton] = useState(false);
    const [moverAlicate, setMoverAlicate] = useState(false);

    useEffect(() => {
        const timeoutTitulo = setTimeout(() => {
            setMoverTitulo(true)
        }, 1000);
        const timeoutOrcamento = setTimeout(() => {
            setMoverOrcamento(true)
        }, 1500);
        const timeoutBotao = setTimeout(() => {
            setMoverButton(true)
        }, 3000);
        const timeoutAlicate = setTimeout(() => {
            setMoverAlicate(true)
        }, 2000);

        return () => {
            timeoutTitulo,
                timeoutOrcamento,
                timeoutBotao,
                timeoutAlicate
        }
    }, []);

    return (
        <>
            <section className={estilo.secaoHeader}>
                <div className={estilo.divAlinhadora}>
                    <div>
                        <h1
                            style={{
                                transform: moverTitulo ? "translateY(0vw)" : "translateY(-50vw)",
                                opacity: moverTitulo ? 1 : 0
                            }}
                        >Elétrica <span>TopMax</span></h1>
                        <h3
                            style={{
                                transform: moverOrcamento ? "translateX(0vw)" : "translateX(-50vw)",
                                opacity: moverOrcamento ? 1 : 0
                            }}
                        >Solicite seu orçamento.</h3>
                    </div>
                    <button style={{
                        transform: moverButton ? "translateY(0vh)" : "translateY(10vh)",
                        opacity: moverOrcamento ? 1 : 0
                    }}>
                        <a href="#">
                            <img src="./social/whats.png" alt="botao-whatsapp-eletrica-topmax" />
                            <h3>Solicite</h3>
                        </a>
                    </button>
                </div>
                <img src="./images/alicate.png" alt="botao-alicate-eletrica-topmax" className={estilo.alicate}
                    style={{
                        transform: moverAlicate ? "translateX(0vw) rotate(0deg)" : "translateX(34vw) rotate(45deg)",
                        opacity: moverAlicate ? 1 : 0
                    }} />
            </section>
        </>
    )
}