/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useEffect, useState } from "react";

import estilo from "../estilos/secaoNormas.module.css";

export default function secaoNormas() {

    let [estadoBarra1, setEstadoBarra1] = useState(10)
    let [estadoBarra2, setEstadoBarra2] = useState(10)
    let [estadoBarra3, setEstadoBarra3] = useState(10)
    let [estadoBarra4, setEstadoBarra4] = useState(10)
    let [estadoBarra5, setEstadoBarra5] = useState(10)

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            console.log(window.scrollY);
            setEstadoBarra1(window.scrollY / 22);
            setEstadoBarra2(window.scrollY / 25);
            setEstadoBarra3(window.scrollY / 21);
            setEstadoBarra4(window.scrollY / 18);
            setEstadoBarra5(window.scrollY / 50);
        });
    }, []);

    return (
        <>
            <section className={estilo.secaoNormas} id="Normas">
                <p></p>
                <section>
                    <div className={estilo.barra1} style={{height: estadoBarra1 + "%"}}></div>
                    <div className={estilo.barra2} style={{height: estadoBarra2 + "%"}}></div>
                    <div className={estilo.barra3} style={{height: estadoBarra3 + "%"}}></div>
                    <div className={estilo.barra4} style={{height: estadoBarra4 + "%"}}></div>
                    <div className={estilo.barra5} style={{height: estadoBarra5 + "%"}}></div>
                    <div className={estilo.informações}>
                        <h3>
                            Toda instalação elétrica deve obedecer às normas de especificações da NBR 5410 (norma que regulamenta as instalações elétricas em baixa tensão) e NR-10 (segurança em instalações e serviços em eletricidade)
                        </h3>
                    </div>
                </section>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </section>
        </>
    )
}