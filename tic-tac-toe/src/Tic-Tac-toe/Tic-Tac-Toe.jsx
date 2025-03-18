import React, { useState } from "react";
import './Tic-Tac-Toe.css'
const TicTacToeComponent = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXnext, setIsXNext] = useState(true);

  const handleClickCell = (index)=>{
    if(board[index]) return;
    const newBoard = [...board];
    newBoard[index] = isXnext ? "❌" : "⭕";
    setBoard(newBoard)
    setIsXNext(!isXnext)
  }
  return (
    <>
      <div className="container">
        <h1>Tic Tac Toe</h1>
        <div className="board">
          {
          board.map((cell, index) => (
         <button onClick={()=>handleClickCell(index)} className="cell" key={index}>
              {cell}
            </button>
          ))
          
          }
        </div>
      </div>
    </>
  );
};

export default TicTacToeComponent;
