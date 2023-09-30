import { NextResponse } from "next/server";
import questoes from "../../bancoDeQuestoes";

async function Getquestoes(req: Request, { params }: any) {
  const newHeaders = new Headers(req.headers);
  newHeaders.set("Access-Control-Allow-Origin", "*");

  const unicaQuestaoOuNada = questoes.filter(
    (questao) => questao.id === +params.id
  );

  if (unicaQuestaoOuNada.length === 1) {
    const questaoSelecionada = unicaQuestaoOuNada[0].embaralharRespostas();
    // const obj = questaoSelecionada.responderCom(0).converterParaObjeto()
    return NextResponse.json(questaoSelecionada.converterParaObjeto(), {
      status: 200,
      headers: newHeaders,
    });
  } else {
    return new Response(null, {
      status: 204,
    });
  }
}
export { Getquestoes as GET };
