/* eslint-disable react-hooks/rules-of-hooks */
"use client";

/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";

import Image from "next/image";

import estilo from "../estilos/secaoNav.module.css";

export default function secaoNav() {

    const [fechaAbrir, setFecharAbrir] = useState(false);

    return (
        <>
            <section className={estilo.secaoNav} id="Inicio">
                <div>
                    <Image src="/images/logo.png" width={50} height={50} />
                    <a href="#Inicio">Elétrica TopMax</a>
                </div>
                <div className={estilo.divOrganizaNav} style={{ right: fechaAbrir ? "0vw" : "-70vw" }}>
                    <div className={estilo.xNav}
                    
                    style={{
                        transform: fechaAbrir ? "rotate(90deg) translateY(-1px)" : "rotate(0deg) translateY(0px)"
                    }}
                    
                    onClick={() => { !fechaAbrir ? setFecharAbrir(true) : setFecharAbrir(false) }}>{fechaAbrir ? <img src="/icons/exit.svg" alt="sair" /> : <img src="/icons/menu.svg" alt="menu" />}</div>
                    <nav>
                        <a href="#Inicio" className={estilo.navA} onClick={() => { setFecharAbrir(false) }}>Inicio</a>
                        <a href="#ComoAtuamos" className={[estilo.navA, estilo.aDesligadoNoPc].join(" ")} onClick={() => { setFecharAbrir(false) }}>Como atuamos</a>
                        <a href="#Normas" className={[estilo.aDesligadoNoPc, estilo.navA].join(" ")} onClick={() => { setFecharAbrir(false) }}>Normas</a>
                        <a href="#MaisInformacoes" className={[estilo.aDesligadoNoPc, estilo.navA].join(" ")} onClick={() => { setFecharAbrir(false) }}>Mais Informações</a>
                        <a href="#Contatos" className={estilo.navA} onClick={() => { setFecharAbrir(false) }}>Contatos</a>
                    </nav>
                </div>
            </section>
        </>
    )
}