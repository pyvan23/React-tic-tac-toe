import { useState } from "react";
import Square from "./components/Square";


export default function Board() {

  const [squares, setSquares] = useState(Array(9).fill(null));

  const handleClick = ({target}) => {
    
    const nextSquares = squares.slice();
    
    nextSquares[target] = "X";
    setSquares(nextSquares);
    console.log(squares);

  }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={handleClick} />
        <Square value={squares[1]} onSquareClick={handleClick} />
        <Square value={squares[2]} onSquareClick={handleClick} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={handleClick} />
        <Square value={squares[4]} onSquareClick={handleClick} />
        <Square value={squares[5]} onSquareClick={handleClick} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={handleClick} />
        <Square value={squares[7]} onSquareClick={handleClick} />
        <Square value={squares[8]} onSquareClick={handleClick}Ñ />
      </div>
    </>
  );
}
