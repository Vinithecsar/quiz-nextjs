"use client";

import RespostaModel from "@/model/resposta";
import styles from "../styles/Resposta.module.css";

interface RespostaProps {
  valor: RespostaModel;
  indice: number;
  letra: string;
  corFundoLetra: string;
  onResponse: (indice: number) => void;
}

export function Resposta(props: RespostaProps) {
  const resposta = props.valor;
  const respostaRevelada = resposta.revelada ? styles.respostaRevelada : "";
  return (
    <div
      onClick={() => props.onResponse(props.indice)}
      className="flex min-w-[500px] w-[80%] h-[100px] m-[10px]"
      style={{ perspective: "1000px" }}
    >
      {/* conteudo da Resposta */}
      <div
        className={`relative flex flex-1 rotate ${respostaRevelada} ${styles.conteudo}`}
      >
        <>
          {/* Frente */}
          <div
            className={`flex items-center rounded-[12px] p-[15px] bg-[white] text-[black] h-[100%] w-[100%] absolute ${styles.visibilidade}`}
          >
            {/* Letra */}
            <div
              style={{ backgroundColor: props.corFundoLetra }}
              className="flex justify-center items-center h-[40px] w-[40px] rounded-[20px] text-[1.3rem] font-bold mr-[20px] text-[white]"
            >
              {props.letra}
            </div>
            {/* Valor */}
            <div className="text-[1.3rem] font-bold">{resposta.valor}</div>
          </div>
        </>
        <>
          {/* Verso */}
          <div
            className={`flex h-[100%] w-[100%] absolute ${styles.visibilidade} ${styles.verso}`}
          >
            {resposta.certa ? (
              <>
                {/* Certo */}
                <div
                  className={
                    "flex flex-col justify-center items-center flex-1 rounded-[12px] bg-[#2BAA6D]"
                  }
                >
                  <div>A resposta certa é...</div>
                  {/* Valor Certo */}
                  <div className="text-[1.5rem] font-bold">
                    {resposta.valor}
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Errado */}
                <div
                  className={
                    "flex flex-col justify-center items-center flex-1 rounded-[12px] bg-[#E44A4C]"
                  }
                >
                  <div>A resposta informada está errada...</div>
                  {/* Valor Errado */}
                  <div className="text-[1.5rem] font-bold">
                    {resposta.valor}
                  </div>
                </div>
              </>
            )}
          </div>
        </>
      </div>
    </div>
  );
}
