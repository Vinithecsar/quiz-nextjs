import { CountdownCircleTimer } from "react-countdown-circle-timer";

interface TemporizadorProps {
  key: any;
  duracao: number;
  tempoEsgotado: () => void;
}

export function Temporizador(props: TemporizadorProps) {
  return (
    <>
      {/* Temporizador */}
      <div className="flex text-[2.5rem] my-[20px]">
        <CountdownCircleTimer
          duration={props.duracao}
          size={120}
          isPlaying
          onComplete={props.tempoEsgotado}
          colors={["#BCE596", "#F7B801", "#ED287A"]}
          colorsTime={[props.duracao, 0.5 * props.duracao, 0]}
        >
          {({ remainingTime, color }) => (
            <span style={{ color }}>{remainingTime}</span>
          )}
        </CountdownCircleTimer>
      </div>
    </>
  );
}
