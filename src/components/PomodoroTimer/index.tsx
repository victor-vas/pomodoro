import { useCallback, useEffect, useState } from 'react';
import { useInterval } from '../../hooks/useInterval';
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
  const [cyclesQtdManager, setCyclesQtdManager] = useState(
    new Array(cycles - 1).fill(true),
  );

  const [completedCycles, setCompletedCycles] = useState(0);
  const [fullWorkingTime, setFullWorkingTime] = useState(0);
  const [numberOfPomodoros, setNumberOfPomodoros] = useState(0);

  const [audioStartWorking, setAudioStartWorking] = useState(null);
  const [audioStopWorking, setAudioStopWorking] = useState(null);

  const configureWork = useCallback(() => {
    setTimeCounting(true);
    setWorking(true);
    setResting(false);
    setMainTime(pomodoroTime);
    audioStartWorking.play();
  }, [
    setTimeCounting,
    setWorking,
    setResting,
    setMainTime,
    audioStartWorking,
    pomodoroTime,
  ]);

  const configureRest = useCallback(
    (long: boolean) => {
      setTimeCounting(true);
      setWorking(false);
      setResting(true);

      if (long) {
        setMainTime(longRestTime);
      } else {
        setMainTime(shortRestTime);
      }

      audioStopWorking.play();
    },
    [
      setTimeCounting,
      setWorking,
      setResting,
      setMainTime,
      audioStopWorking,
      longRestTime,
      shortRestTime,
    ],
  );

  useInterval(
    () => {
      setMainTime(mainTime - 1);
      if (working) setFullWorkingTime(fullWorkingTime + 1);
    },
    timeCounting ? 1000 : null,
  );

  useEffect(() => {
    setAudioStartWorking(new Audio('/audios/bell-start.mp3'));
    setAudioStopWorking(new Audio('/audios/bell-finish.mp3'));
  }, []);

  useEffect(() => {
    if (working) document.body.classList.add('working');
    if (resting) document.body.classList.remove('working');

    if (mainTime > 0) return;

    if (working && cyclesQtdManager.length > 0) {
      configureRest(false);
      cyclesQtdManager.pop();
    } else if (working && cyclesQtdManager.length <= 0) {
      configureRest(true);
      setCyclesQtdManager(new Array(cycles - 1).fill(true));
      setCompletedCycles(completedCycles + 1);
    }

    if (working) setNumberOfPomodoros(numberOfPomodoros + 1);
    if (resting) configureWork();
  }, [
    working,
    resting,
    mainTime,
    cyclesQtdManager,
    numberOfPomodoros,
    completedCycles,
    configureRest,
    setCyclesQtdManager,
    configureWork,
    cycles,
  ]);

  return (
    <PomodoroTimerContainer>
      <h2>Você está: {working ? 'Trabalhando' : 'Descansando'}</h2>

      <Timer mainTime={mainTime} />

      <div className="controls">
        <button onClick={() => configureWork()}>Work</button>
        <button onClick={() => configureRest(false)}>Rest</button>
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
