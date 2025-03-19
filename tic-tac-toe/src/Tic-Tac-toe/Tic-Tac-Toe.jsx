import React, { useState } from "react";
import "./Tic-Tac-Toe.css";
const TicTacToeComponent = () => {
  const calculateWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],

      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    const winner = lines.map(([a,b,c]) =>{

      if(board[a] && board[a] === board[b] && board[a] === board[c]){

        return board[a];
      }

      return null;
    }).find(result => result)

    return winner || null;
      
  };
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXnext, setIsXNext] = useState(true);
  const winner = calculateWinner(board);
  const isDraw = !winner && board.every((cell)=>cell !== null)

  const handleClickCell = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = isXnext ? "❌" : "⭕";
    setBoard(newBoard);
    setIsXNext(!isXnext);
  };

  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };
  return (
    <>
      <div className="container">
        <h1 className="title">Tic Tac Toe</h1>
        <div className="board">
          {board.map((cell, index) => (
            <button
              onClick={() => handleClickCell(index)}
              className="cell"
              key={index}
            >
              {cell}
            </button>
          ))}
        </div>
        {winner && <p className="winner">winner: {winner}</p>}
        {isDraw && <p className="winner">Draw</p>}
        {(winner || isDraw) && (

        <button className="restart-button" onClick={restartGame}>Restart Game</button>
        )}
      </div>
    </>
  );
};

export default TicTacToeComponent;
