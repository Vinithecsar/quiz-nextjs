interface EstatisticaProps {
  valor: any;
  texto: string;
  corFundo?: string;
  corFonte?: string;
}

export function Estatistica(props: EstatisticaProps) {
  return (
    <div className="flex flex-col items-center m-[10px]">
      {/* Valor */}
      <div
        className="flex justify-center items-center h-[180px] w-[180px] rounded-[90px] text-[4rem]"
        style={{
          backgroundColor: props.corFundo ?? "#FDD60F",
          color: props.corFonte ?? "#333",
        }}
      >
        {props.valor}
      </div>
      {/* Texto */}
      <div className="text-[#ddd] text-[1.7rem] font-extralight">
        {props.texto}
      </div>
    </div>
  );
}
