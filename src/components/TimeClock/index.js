import React, { useState, useEffect } from 'react';

function Clock() {

  const [timeClock, setTimeClock] = useState('');

  useEffect(() => {
    const setTime = setInterval(() => {
      const date = new Date();
      let [hours, minutes, seconds] = [
        `0${date.getHours()}`.slice(-2), 
        `0${date.getMinutes()}`.slice(-2), 
        `0${date.getSeconds()}`.slice(-2)
      ];
      setTimeClock(`${hours}:${minutes}:${seconds}`);
    }, 1000);

    return () => {
      clearInterval(setTime);
    }
  }, []);


  return (
    <div className="position-absolute" style={{top: 10, right: 20}}>
      <p className="text-primary h5">
        {timeClock}
      </p>
    </div>
  )
}

export default Clock;