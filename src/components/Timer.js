import React, { useEffect, useState } from 'react';

const toMMSS = (num) => {
    var sec_num = parseInt(num, 10); // don't forget the second param
    var minutes = Math.floor(sec_num / 60);
    var seconds = sec_num - (minutes * 60);

    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return minutes+':'+seconds;
}

function Timer({ isGameOver }) {
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        let interval;
        if (!isGameOver) {
            // start interval/timer
            interval = setInterval(() => {
            setTimer((timer) => timer + 1);
            }, 1000);
        } else if (isGameOver) {
            // stops/resets timer
            clearInterval(interval);
            setTimer(0);
        }

        // when component unmounts stops timer / clearInterval
        return () => {
            clearInterval(interval);
        };
    }, [isGameOver]);

    return (
      <span>{toMMSS(timer)}</span>
    );
  }
  
  export default Timer;
