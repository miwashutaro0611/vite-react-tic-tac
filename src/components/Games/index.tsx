import React, { useState, VFC } from "react"
import { Board } from "../Board"
import { Squares, SquaresUser } from "../../types/squares"

const Games: VFC = () => {
  const [history, setHistory] = useState<Squares[]>([
    { squares: Array(9).fill(null) },
  ])
  const [xIsNext, setXIsNext] = useState<boolean>(true)
  const [stepNumber, setStepNumber] = useState<number>(0)

  const lines: number[][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  const calulateWinner = (squares: SquaresUser[]): SquaresUser | null => {
    for (let i = 0; i < lines.length; i += 1) {
      const [a, b, c] = lines[i]
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a]
      }
    }
    return null
  }

  const handleClick = (i: number) => {
    const localHistory = history
    const localCurrent = localHistory[localHistory.length - 1]
    const localSquares = localCurrent.squares.slice()
    if (calulateWinner(localSquares) || localSquares[i]) return
    localSquares[i] = xIsNext ? "X" : "O"
    setHistory(
      localHistory.concat([
        {
          squares: localSquares,
        },
      ]),
    )
    setStepNumber(localHistory.length)
    setXIsNext(!xIsNext)
  }

  const current = history[stepNumber]

  const winner = calulateWinner(current.squares)

  const jumpTo = (step: number) => {
    setStepNumber(step)
    setXIsNext(step % 2 === 0)
  }

  const moves = history.map((step, moveNum) => {
    const desc = moveNum ? `Go to move #${moveNum}` : "Go to game start"
    return (
      <li key={moveNum}>
        <button type="button" onClick={() => jumpTo(moveNum)}>
          {desc}
        </button>
      </li>
    )
  })

  let status
  if (winner) {
    status = `winner: ${winner}`
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`
  }
  return (
    <React.Fragment>
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i: number) => handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Games
