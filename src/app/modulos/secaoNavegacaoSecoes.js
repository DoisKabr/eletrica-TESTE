/* eslint-disable @next/next/no-img-element */
import React from "react";

import estilo from "../estilos/secaoNavegacaoSecoes.module.css";

export default function secaoNavegacaoSecoes() {
    return (
        <>
            <section className={estilo.secaoNavegacaoSecoes}>
                <a href="#ComoAtuamos">
                    <img src="./images/eletricista/01.jpg" alt="eletricista-eletrica-topmax" />
                    <div>
                        <h4>Como atuamos :</h4>
                        <div>
                            <h5>As principais atividades de nossos eletricistas estão atreladas à manutenção elétrica e à instalação de equipamentos eletrônicos...</h5>
                            <button>Ver mais.</button>
                        </div>
                    </div>
                </a>
                <a href="#Normas">
                    <img src="./images/eletricista/02.jpg" alt="eletricista-eletrica-topmax" />
                    <div>
                        <h4>Normas :</h4>
                        <div>
                            <h5>Toda instalação elétrica deve obedecer às normas de especificações da NBR 5410...</h5>
                            <button>Ver mais.</button>
                        </div>
                    </div>
                </a>
                <a href="#MaisInformacoes">
                    <img src="./images/eletricista/03.jpg" alt="eletricista-eletrica-topmax" />
                    <div>
                        <h4>Mais Informações :</h4>
                        <div>
                            <h5>
                                A instalação elétrica é um aspecto fundamental para garantir o pleno funcionamento de diferentes tipos de edificações...
                            </h5>
                            <button>Ver mais.</button>
                        </div>
                    </div>
                </a>
            </section>
        </>
    )
}