import React, { useState, useEffect } from 'react';
import { getEmptyBoard1D, getWinner, getTrophy } from '../services/tictactoe';
import Board from './Board';
import './Game.scss';

const Game = () => {

  const [history,setHistory] = useState(getEmptyBoard1D);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const [status, setStatus] = useState("");

  function handleClick(i) {
    const hist = history.slice(0, stepNumber + 1);
    const current = hist[hist.length - 1];
    const squares = current.squares.slice();

    if (getWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = xIsNext ? "X" : "O";
  
    setHistory(hist.concat([{ squares }]));
    setStepNumber(hist.length);
    setXIsNext(!xIsNext);
  }

  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext((step % 2) === 0);
  }

  let current = history[stepNumber]; 
  let winner = getWinner(current.squares); 

  const moves = history.map((step, move) => {
    let desc = move ?
      'Go to move #' + move :
      'Go to game start';

    if (winner && move === history.length - 1) {
      desc = status;
    }
    return (
      <li key={move}>
        <button 
          className={(stepNumber === move) ? 'active' : ''} 
          onClick={() => jumpTo(move)}>
            {desc}
        </button>
      </li>
    );
  });

  const trophy = () => {
    if (winner) {
      return getTrophy();
    }
  }  

  useEffect(()=> {
    if (winner) {
      setStatus("Winner: " + winner);
    } else if (history[stepNumber].squares.every(square => square != null)) {
      setStatus("DRAW!");
    } else {
      setStatus("Next player: " + (xIsNext ? "X" : "O"));
    }    
  }, [winner, xIsNext, history, stepNumber]);    
  
  return (
    <div className="game">
      <div className="game-board">
        <Board          
          squares={current.squares}
          onClick={i => handleClick(i)}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
      {trophy()}
    </div>
  );
}

export default Game;
