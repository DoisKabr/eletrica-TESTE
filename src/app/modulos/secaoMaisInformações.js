import React from "react";

import estilo from "../estilos/secaoMaisInformacoes.module.css";

export default function secaoMaisInformacoes() {
    return (
        <>
            <section className={estilo.secaoMaisInformacoes} id="MaisInformacoes">
                <p></p>
                <section>
                    <section>
                        <div>
                            <h2>Mais Informações</h2>
                        </div>
                        <section className={estilo.secaoInfoDiv}>
                            {/* Projetos Elétricos */}
                            <div>
                                <h3>Projetos Elétricos</h3>
                                <h5>
                                    A instalação elétrica é um aspecto fundamental para garantir o pleno funcionamento de diferentes tipos de edificações.

                                    A eletricidade é essencial para alimentar equipamentos e sistemas de iluminação, ar-condicionado, refrigeração, comunicação, segurança e muitos outros dispositivos que fazem parte do dia a dia das pessoas.

                                </h5>
                                <h5>
                                    Contar com sistemas elétricos seguros, eficientes e dimensionados para atender às necessidades específicas de cada ambiente.

                                    No caso de baixa e média tensão, existem opções de entradas individuais ou coletivas, aéreas ou subterrâneas, que podem ser aplicadas em residências, prédios comerciais, industriais, condomínios, shoppings, galpões, hipermercados, loteamentos e qualquer outro local onde seja necessário a presença de energia elétrica.
                                </h5>
                                <h5>
                                    É necessário sempre buscar soluções adequadas, que levem em consideração as normastécnicas e a segurança das pessoas que frequentam o espaço.
                                </h5>
                            </div>

                            {/* Tratativas com Concessionárias de Energia */}
                            <div>
                                <h3>Tratativas com Concessionárias de Energia</h3>
                                <h5>
                                    Normalmente as tratativas com as concessionárias são bem burocráticas e podemos encurtar este caminho quando se trata de enquadramento tarifário, ressarcirmento por danos elétricos, análise de reativo, levantamento de curva de cargas, violação dos limites de tensão e análise de consumo de energia.
                                </h5>
                            </div>

                            {/* Laudos de Inspeção Elétricas / NR10 / NR33 / PERICIAIS */}
                            <div>
                                <h3>Laudos de Inspeção Elétricas / NR10 / NR33 / PERICIAIS</h3>
                                <h5>
                                    Laudos que permitem identificar as não conformidade perante as normas técnicas e as leis vigentes, prevenindo que as seguradoras deixem de indenizar as instalações no caso de sinistro. Previne custos futuros com reparos emergenciais, identificando pontos com excesso de aquecimento que podem provocar incêndio ou aumento no consumo de energia.
                                </h5>
                            </div>

                            {/* Sistemas de Prevenção Contra Descargas Atmosféricas - SPDA */}
                            <div>
                                <h3>Sistemas de Prevenção Contra Descargas Atmosféricas - SPDA</h3>
                                <h5>
                                    Esses sistemas servem para proteção de prédios, antenas, instalações industriais, tanques, tubulações e pessoas contra as descargas atmosféricas e seus efeitos.

                                    Basicamente o objetivo do SPDA é dissipar para terra a corrente elétrica gerada pela descarga atmosférica, direcionando-a por um caminho mais seguro possível, desta maneira minimizando ou anulando seus impactos.
                                </h5>
                                <h5>
                                    A norma regulamentadora NR10 estabelece que todo estabelecimento que tenha potência instalada superior a 75KW, deve possuir e manter o prontuário das instalações elétricas (PIE), dentro desta documentação deve conter o relatório de inspeção do sistema SPDA e os aterramentos elétricos.
                                </h5>
                                <h5>
                                    A utilização de SPDA é uma exigência do corpo de bombeiros em edifícios com mais de 30 metros de altura e instalações comerciais e industriais, com mais de 1500 m² de área construída, também é exigência em áreas destinadas a depósitos de explosivos e inflamáveis, e também em outras edificações a critério do Corpo de Bombeiros, sempre que se justificar a necessidade pela periculosidade.
                                </h5>
                            </div>

                        </section>
                    </section>
                </section>
            </section>
        </>
    )
}