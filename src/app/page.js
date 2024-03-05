/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect } from "react";

import SecaoHeader from "./modulos/secaoHeader";
import SecaoNav from "./modulos/secaoNav";
import SecaoNavegacaoSecoes from "./modulos/secaoNavegacaoSecoes";
import SecaoComoAtuamos from "./modulos/secaoComoAtuamos";
import SecaoNormas from "./modulos/secaoNormas";
import SecaoMaisInformacoes from "./modulos/secaoMaisInformações";
import SecaoFooter from "./modulos/secaoFooter";

export default function Home() {

  let i = 0;
  useEffect(() => {

    const keywords = document.createElement("meta");

    if (i == 0) {
      keywords.name = "keywords";
      keywords.content = "eletricista, site, serviços";
      document.head.appendChild(keywords);

      i++;
    }

    return () => {
      keywords
    }
  }, [])

  return (
    <>
      <SecaoNav />
      <SecaoHeader />
      <SecaoNavegacaoSecoes />
      <SecaoComoAtuamos />
      <SecaoNormas />
      <SecaoMaisInformacoes />
      <SecaoFooter />
    </>
  )
}