import React, { VFC } from "react"
import { SquaresUser } from "../../types/squares"
import style from "./style.module.css"

type Props = {
  value: SquaresUser
  onClick: () => void
}

export const Square: VFC<Props> = ({ value, onClick }) => (
  <button type="button" className={style.square} onClick={() => onClick()}>
    {value}
  </button>
)
