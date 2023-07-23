import { MouseEventHandler } from 'react'

export default function ButtonComponent({label, onClickHandler}:{label: string, onClickHandler:MouseEventHandler}) {
  return (
    <button
        onClick={onClickHandler}
    >{label}</button>
  )
}
