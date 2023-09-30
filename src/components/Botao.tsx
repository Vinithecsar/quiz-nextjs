import Link from "next/link";

interface BotaoProps {
  texto: string;
  href?: string;
  onClick?: (e: any) => void;
}

export function Botao(props: BotaoProps) {
  function renderizarBotao() {
    return (
      <button
        className={`text-[white] rounded-[8px] font-extralight text-[1.2rem] border-none bg-[#9885F0] py-[10px] px-[25px] cursor-pointer transition-all duration-200 ease-in-out hover:scale-110 mt-[40px]`}
        onClick={props.onClick}
      >
        {props.texto}
      </button>
    );
  }

  return props.href ? (
    <Link href={props.href}>{renderizarBotao()}</Link>
  ) : (
    renderizarBotao()
  );
}
