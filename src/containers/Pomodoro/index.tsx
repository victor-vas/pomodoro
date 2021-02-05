import PomodoroTimer from '../../components/PomodoroTimer';
import { PomodoroContainer } from './styled';

const Pomodoro = () => {
  return (
    <PomodoroContainer>
      <PomodoroTimer
        pomodoroTime={1500}
        shortRestTime={300}
        longRestTime={900}
        cycles={4}
      />
    </PomodoroContainer>
  );
};

export default Pomodoro;
