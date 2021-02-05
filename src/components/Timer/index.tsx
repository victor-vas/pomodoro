import { secondsToMinutes } from '../../utils/secondsToMinutes';

interface TimerProps {
  mainTime: number;
}

const Timer = ({ mainTime }: TimerProps) => {
  return <div className="timer">{secondsToMinutes(mainTime)}</div>;
};

export default Timer;
