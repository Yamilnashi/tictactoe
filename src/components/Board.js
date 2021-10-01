import React from 'react';
import BoardCell from './BoardCell';
import { getWinner, getWinningLine } from '../services/tictactoe';

const Board = (props) => { 
  const winner = getWinner(props.squares);

  const renderBoard = (i) => {
      return (
        <BoardCell
            value={props.squares[i]}
            onClick={() => props.onClick(i)}
            isDisabled={props.squares[i] != null}
            isWinningSquare={(winner) ? (getWinningLine(props.squares).includes(i)) : false}
        />
      );
    }
    
    return (
        <div>
            <div className="board-row">
            {renderBoard(0)}
            {renderBoard(1)}
            {renderBoard(2)}
          </div>
          <div className="board-row">
            {renderBoard(3)}
            {renderBoard(4)}
            {renderBoard(5)}
          </div>
          <div className="board-row">
            {renderBoard(6)}
            {renderBoard(7)}
            {renderBoard(8)}
          </div>
        </div>
    );
}
export default Board;