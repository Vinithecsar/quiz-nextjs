"use client";

import { Botao } from "@/components/Botao";
import { Estatistica } from "@/components/Estatistica";
import { useSearchParams } from "next/navigation";

export default function Resultado() {
  const searchParams = useSearchParams();

  const total = +(searchParams.get("total") ?? 0);
  const certas = +(searchParams.get("certas") ?? 0);
  const percentual = Math.round((certas / total) * 100);

  return (
    <div className="flex flex-col justify-center items-center h-[100vh] text-[4.5rem]">
      <h1 className="pb-6">
        <b>Resultado Final</b>
      </h1>
      <div className="flex">
        <Estatistica texto="Perguntas" valor={total} />
        <Estatistica texto="Certas" valor={certas} corFundo="#9CD2A4" />
        <Estatistica
          texto="Percentual"
          valor={`${percentual}%`}
          corFundo="#DE6A33"
        />
      </div>
      <Botao href="/" texto="Tentar novamente" />
    </div>
  );
}
