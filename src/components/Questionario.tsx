import QuestaoModel from "@/model/questao";
import { Questao } from "./Questao";
import { Botao } from "./Botao";

interface QuestionarioProps {
  questao: QuestaoModel;
  ultima: boolean;
  onResponse: (questao: QuestaoModel) => void;
  irParaProximoPasso: () => void;
}

export function Questionario(props: QuestionarioProps) {
  function onResponse(indice: number) {
    if (props.questao.naoRespondida) {
      props.onResponse(props.questao.responderCom(indice));
    }
  }

  return (
    <>
      {/* Questionário */}
      <div className="flex flex-col justify-center items-center h-[100vh]">
        {props.questao ? (
          <Questao
            valor={props.questao}
            tempoParaResposta={6}
            onResponse={onResponse}
            tempoEsgotado={props.irParaProximoPasso}
          />
        ) : (
          false
        )}
        <Botao
          onClick={props.irParaProximoPasso}
          texto={props.ultima ? "Finalizar" : " Próxima"}
        />
      </div>
    </>
  );
}
