interface EnunciadoProps {
  texto: string;
}

export function Enunciado(props: EnunciadoProps) {
  return (
    <div className={"flex"}>
      {/* Texto */}
      <span className={"text-[2.5rem] font-bold"}>{props.texto}</span>
    </div>
  );
}
