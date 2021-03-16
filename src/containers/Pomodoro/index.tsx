import PomodoroTimer from '../../components/PomodoroTimer';
import { PomodoroContainer } from './styled';

const Pomodoro = () => {
  return (
    <PomodoroContainer>
      <PomodoroTimer
        pomodoroTime={3000}
        shortRestTime={600}
        longRestTime={1800}
        cycles={4}
      />
    </PomodoroContainer>
  );
};

export default Pomodoro;
