import React from "react";

import estilo from "../estilos/secaoComoAtuamos.module.css";

export default function secaoComoAtuamos() {
    return (
        <>
            <section className={estilo.secaoComoAtuamos} id="ComoAtuamos">
                <p></p>
                <section>
                    <h2>Como atuamos :</h2>
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div>
                            <h4>As principais atividades de nossos eletricistas estão atreladas à manutenção elétrica e à instalação de equipamentos eletrônicos.</h4>

                            <h5>Fazendo uso correto dos equipamentos de proteção individual (EPI), Utilizam de forma correta aparelhos como o multímetro e amperímetro, Conhecem as normas técnicas e procedimentos de segurança e primeiros socorros.</h5>

                            <h5>Nossos eletricistas desenvolvem, em seu dia a dia, as seguintes atividades:</h5>

                            <ul>
                                <li>Planejar serviços elétricos;</li>
                                <li>Realizar instalação de distribuição de alta e baixa tensão;</li>
                                <li> Montar e reparar instalações elétricas e equipamentos auxiliares em residências, estabelecimentos industriais, comerciais e de serviços;</li>
                                <li>Instalar e reparar equipamentos de iluminação de cenários ou palcos.</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}