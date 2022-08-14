import React, { useEffect } from 'react';
import styled from 'styled-components';
import { formatTime } from '../util';

const TimeDiv = styled.div`
    display: flex;
    align-items: center;
    img {
        width: 2rem;
        margin-right: 5px;
        @media (max-width: 768px) {
            width: 1.5rem;
        }
    }
`;

const Timer = ({ isGamePlaying, timer, setTimer }) => {

    useEffect(() => {
        let interval;
        if (isGamePlaying) {
            // start interval/timer
            interval = setInterval(() => {
            setTimer((timer) => timer + 1);
            }, 100);
        } else {
            // stops timer
            clearInterval(interval);
        }

        // when component unmounts stops timer / clearInterval
        return () => {
            clearInterval(interval);
        };
    }, [isGamePlaying, setTimer]);

    return (
        <TimeDiv>
            <img src={require('../assets/time-48.png')} alt="" />
            <span>{formatTime(timer)}</span>
        </TimeDiv>
    );
  }
  
  export default Timer;
