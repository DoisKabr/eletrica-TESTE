import React from "react";

import Image from "next/image";

import estilo from "../estilos/secaoFooter.module.css";
import Link from "next/link";

export default function secaoFooter() {
    return (
        <>
            <section className={estilo.secaoFooter} id="Contatos">
                <p></p>
                <section>
                    <div>
                        <Image src="/images/logo.png" width={200} height={200} alt="logo eletricista"/>
                        <h3>Elétrica</h3>
                    </div>
                    <div>
                        <h3>Links</h3>
                        <div>
                            <Link href="#Inicio">Inicio</Link>
                            <Link href="#ComoAtuamos">Como atuamos</Link>
                            <Link href="#Normas">Normas</Link>
                            <Link href="#MaisInformacoes">Mais Informações</Link>
                        </div>
                    </div>
                    <div>
                        <h3>Contatos</h3>
                        <div>
                            <Link href="tell:+5511999999999">&#128222; +55 11 9 9999-9999</Link>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}