import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import {
  FormattedTitle,
  PlayIcon,
  TimerBtn,
  TimerSub,
  TimerText,
  TimerTitle,
  TimerWrapper,
} from './Timer.styled';
import symbolDefs from '../../assets/sprite.svg';
import { useState } from 'react';
// import _ from 'lodash.throttle';
// import { duration } from '@mui/material';

const Timer = ({ data, setDinamicBurnCal, dinamicBurnCal, setDinamicTime }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };
  const children = ({ remainingTime }) => {
    const duration = data.time * 60;

    setDinamicBurnCal(() => {
      const time = (duration - remainingTime) / duration;

      const burnCal = time * data.burnedCalories;
      return Math.round(burnCal);
    });
    setDinamicTime(() => duration - remainingTime);

    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    return `${minutes}:${seconds}`;
  };
  return (
    <TimerWrapper>
      <TimerTitle>Time</TimerTitle>
      {/* <CountdownCircleTimer
        strokeWidth={2}
        size={124}
        isPlaying={isPlaying}
        duration={data.time * 60}
        colors={'var(--color-main-one)'}
        remainingTime={data.time * 60}
        // colorsTime={[7, 5, 2, 0]}
      >
        {({ remainingTime }) => (
          <div style={{ color: '#efede8' }} role="timer" aria-live="assertive">
            {children({ remainingTime })}
          </div>
        )} */}
      {/* </CountdownCircleTimer> */}
      {/* <FormattedTitle>{data.time} minutes</FormattedTitle> */}
      <TimerBtn onClick={handlePlay}>
        <PlayIcon>
          <use
            href={
              isPlaying
                ? `${symbolDefs}#icon-pause`
                : `${symbolDefs}#icon-play`
            }
          ></use>
        </PlayIcon>
      </TimerBtn>
      <TimerText>
        Burned calories:<TimerSub>{dinamicBurnCal}</TimerSub>
      </TimerText>
    </TimerWrapper>
  );
};

export default Timer;