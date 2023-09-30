"use client";

import QuestaoModel from "@/model/questao";
import { useEffect, useState } from "react";
import { Questionario } from "@/components/Questionario";
import { useRouter } from "next/navigation";

const BASE_URL = "http://localhost:3000/api";

export default function Home() {
  const router = useRouter();

  const [idsDasQuestoes, setIdsDasQuestoes] = useState<number[]>([]);
  const [questao, setQuestao] = useState<QuestaoModel>();
  const [respostasCertas, setRespostasCertas] = useState<number>(0);

  async function carregarQuestoesIds() {
    const resp = await fetch(`${BASE_URL}/questionario`);
    const idDasQuestoes = await resp.json();
    setIdsDasQuestoes(idDasQuestoes);
  }

  async function carregarQuestao(idQuestao: number) {
    const resp = await fetch(`${BASE_URL}/questoes/${idQuestao}`);
    const questao = await resp.json();
    setQuestao(QuestaoModel.criarUsandoObjeto(questao));
  }

  useEffect(() => {
    carregarQuestoesIds();
  }, []);

  useEffect(() => {
    idsDasQuestoes.length > 0 && carregarQuestao(idsDasQuestoes[0]);
  }, [idsDasQuestoes]);

  function onResponse(questaoRespondida: QuestaoModel) {
    setQuestao(questaoRespondida);
    const acertou = questaoRespondida.acertou;
    setRespostasCertas(respostasCertas + (acertou ? 1 : 0));
  }

  function idProximaPergunta() {
    if (questao) {
      const proximoIndice = idsDasQuestoes.indexOf(questao.id) + 1;
      return idsDasQuestoes[proximoIndice];
    }
  }

  function irParaProximoPasso() {
    const proximoId = idProximaPergunta();
    proximoId ? irParaProximaQuestao(proximoId) : finalizar();
  }

  function irParaProximaQuestao(proximoId: number) {
    carregarQuestao(proximoId);
  }

  function finalizar() {
    router.push(
      `/resultado?total=${idsDasQuestoes.length}&certas=${respostasCertas}`
    );
  }

  return questao ? (
    <Questionario
      questao={questao}
      ultima={idProximaPergunta() === undefined}
      onResponse={onResponse}
      irParaProximoPasso={irParaProximoPasso}
    />
  ) : (
    false
  );
}
