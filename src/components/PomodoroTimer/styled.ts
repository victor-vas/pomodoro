import styled from 'styled-components';

export const PomodoroTimerContainer = styled.div`
  background: #fff;
  margin: 5rem 2rem;
  padding: 2rem;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  h2 {
    font-size: 2.4rem;
    text-align: center;
  }

  .timer {
    font-size: 6rem;
    text-align: center;
  }

  .controls {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  button {
    background: #41e1ba;
    border: none;
    cursor: pointer;
    padding: 1rem 2.5rem;
    color: #000;
    transition: background-color 300ms ease-in-out;
    margin: 2rem auto;
  }

  .details {
    font-size: 1.8rem;
    margin: 2rem 0;
  }
`;
