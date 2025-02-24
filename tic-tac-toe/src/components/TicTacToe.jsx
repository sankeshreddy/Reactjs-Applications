import { useState } from "react";
import Board from "./Board";

function TicTacToe(){

    const PLAYER_X = "X";
    const PLAYER_O = "O"; 

    const [tiles, setTiles] = useState(Array(9). fill(null));
    const [playerTurn, setPlayerTurn] = useState(PLAYER_X);

    const handleTileClick = (index) =>{
        console.log(index);
        
    }

    return(
        <div>
        <h1>Tic Tac Toe</h1>
        <Board tiles = {tiles} onTileClick={handleTileClick}/>
        </div>
    );
}

export default TicTacToe;