import { NextResponse } from "next/server";
import questoes from "../bancoDeQuestoes";
import { Embaralhar } from "@/functions/Arrays";

async function Questionario(req: Request) {
  const ids = questoes.map((questao) => questao.id);
  return NextResponse.json(Embaralhar(ids), {
    status: 200,
  });
}
export { Questionario as GET };
