import React, { VFC } from "react"
import { Square } from "../Square"
import { SquaresUser } from "../../types/squares"
import style from "./style.module.css"

type Props = {
  squares: SquaresUser[]
  onClick: (i: number) => void
}

export const Board: VFC<Props> = ({ squares, onClick }) => {
  const renderSquare = (i: number): JSX.Element => (
    <Square value={squares[i]} onClick={() => onClick(i)} />
  )
  return (
    <div>
      <div className={style["board-row"]}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className={style["board-row"]}>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className={style["board-row"]}>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
}
