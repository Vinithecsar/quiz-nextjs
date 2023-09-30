import { NextResponse } from "next/server";
import questoes from "../bancoDeQuestoes";
import { Embaralhar } from "@/functions/Arrays";

async function Questionario(req: Request) {
  const newHeaders = new Headers(req.headers);
  newHeaders.set("Access-Control-Allow-Origin", "*");

  const ids = questoes.map((questao) => questao.id);
  return NextResponse.json(Embaralhar(ids), {
    status: 200,
    headers: newHeaders,
  });
}
export { Questionario as GET };
