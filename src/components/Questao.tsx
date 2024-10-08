"use client";

import QuestaoModel from "@/model/questao";
import { Enunciado } from "./Enunciado";
import { Resposta } from "./Resposta";
import { Temporizador } from "./Temporizador";

const letras = [
  { valor: "A", cor: "#F2C866" },
  { valor: "B", cor: "#F266BA" },
  { valor: "C", cor: "#85D4F2" },
  { valor: "D", cor: "#BCE596" },
];

interface QuestaoProps {
  valor: QuestaoModel;
  tempoParaResposta?: number;
  onResponse: (indice: number) => void;
  tempoEsgotado: () => void;
}

export function Questao(props: QuestaoProps) {
  const questao = props.valor;

  function renderizarRespostas() {
    return questao.respostas.map((resposta, i) => {
      return (
        <Resposta
          key={`${questao.id}-${i}`}
          valor={resposta}
          indice={i}
          letra={letras[i].valor}
          corFundoLetra={letras[i].cor}
          onResponse={props.onResponse}
        />
      );
    });
  }

  return (
    <div className={"flex flex-col items-center"}>
      <Enunciado texto={questao.enunciado} />
      <Temporizador
        key={questao.id}
        duracao={props.tempoParaResposta ?? 10}
        tempoEsgotado={props.tempoEsgotado}
      />
      {renderizarRespostas()}
    </div>
  );
}
