import React, {useCallback, useState} from 'react';
import './styles.css';
import CNTS from './const';
import {Matrix} from "./types";

import getInitialData from './helpers/getInitialData';
import tick from './helpers/tick';

import Row from "./components/row";
import Cell from "./components/cell";
import Button from "./components/button";

export default function App() {
  const [data, setData] = useState<Matrix>(getInitialData(CNTS.DEFAULT_LIVE_CELLS));
  const [intervalId, handleIntervalId] = useState<null | ReturnType<typeof setTimeout> >(null);

  const handleStartGame = useCallback(() => {
    const id: null | ReturnType<typeof setTimeout>  = setInterval(() => {
      setData((prev) => tick(prev))
    }, CNTS.INTERVAL)

    if (intervalId) clearInterval(intervalId);
    handleIntervalId(id);
  }, [intervalId]);

  const handleNewGame = useCallback(() => {
    if (intervalId) clearInterval(intervalId);
    setData(getInitialData(CNTS.DEFAULT_LIVE_CELLS));
  }, [intervalId]);

  return (
    <div className="App">
      <Button text='Start Game' handleClick={handleStartGame}/>
      <Button text='New Game' handleClick={handleNewGame}/>
      {data.map((row,rowIndex) => (
        <Row key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <Cell cell={cell} key={`${rowIndex}_${cellIndex}`}/>
          ))}
        </Row>
      ))}
    </div>
  );
}
