import React, { useState, useEffect } from "react";
import { Button, Form, Input, Select } from "antd";

export default function StopWatch() {
  const [formatedTime, setFormatedTime] = useState("00:00");
  const [time, setTime] = useState(0);
  const [isStart, setIsStart] = useState(false);
  let interval;
  const handleStart = () => {
    console.log("execution");
    setIsStart(true);
  };

  useEffect(() => {
    if (isStart) {
      interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 100000000);
    }
  }, [isStart]);

  const handleStop = () => {
    //setIsStart(false);
    if (isStart) {
      setTime(0);
      setIsStart(false);
      if (interval) {
        clearInterval(interval);
      }
    }
  };

  return (
    <div>
      <h1>{time}</h1>
      <Button
        onClick={() => {
          handleStart();
        }}
        type="primary"
        htmlType="submit"
      >
        Start
      </Button>
      <Button
        onClick={() => {
          handleStop();
        }}
        type="primary"
        htmlType="submit"
      >
        Stop
      </Button>
      <Button type="primary" htmlType="submit">
        Reset
      </Button>
      <Button type="primary" htmlType="submit">
        Lap
      </Button>
    </div>
  );
}
