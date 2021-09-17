import React, { VFC } from "react"
import { SquaresUser } from "../../types/squares"

type Props = {
  value: SquaresUser
  onClick: () => void
}

export const Square: VFC<Props> = ({ value, onClick }) => (
  <button type="button" className="square" onClick={() => onClick()}>
    {value}
  </button>
)
