import { useState } from 'react';
import { secondsToTime } from '../../utils/secondsToTime';
import Timer from '../Timer';
import { PomodoroTimerContainer } from './styled';
interface PomodoroTimerProps {
  pomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
}

const PomodoroTimer = ({
  pomodoroTime,
  shortRestTime,
  longRestTime,
  cycles,
}: PomodoroTimerProps) => {
  const [working, setWorking] = useState(false);
  const [mainTime, setMainTime] = useState(pomodoroTime);
  const [resting, setResting] = useState(false);
  const [timeCounting, setTimeCounting] = useState(false);

  const [completedCycles, setCompletedCycles] = useState(0);
  const [fullWorkingTime, setFullWorkingTime] = useState(0);
  const [numberOfPomodoros, setNumberOfPomodoros] = useState(0);

  return (
    <PomodoroTimerContainer>
      <h2>Você está: {working ? 'Trabalhando' : 'Descansando'}</h2>

      <Timer mainTime={mainTime} />

      <div className="controls">
        <button>Work</button>
        <button>Rest</button>
        <button
          className={!working && !resting ? 'hidden' : ''}
          onClick={() => setTimeCounting(!timeCounting)}
        >
          {timeCounting ? 'Pause' : 'Play'}
        </button>
      </div>

      <div className="details">
        <p>Ciclos concluídos: {completedCycles}</p>
        <p>Horas trabalhadas: {secondsToTime(fullWorkingTime)}</p>
        <p>Pomodoros concluídos: {numberOfPomodoros}</p>
      </div>
    </PomodoroTimerContainer>
  );
};

export default PomodoroTimer;
