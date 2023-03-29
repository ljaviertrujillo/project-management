import './styles/pure.scss'
import { ButtonType } from "./ButtonUser"
import { classNames } from '../../models'
import {VscAdd, VscClose} from 'react-icons/vsc'

interface Props{
    title: string,
    type: ButtonType,
    state: boolean,
    handle: () => void
}

function AddButton({title, type, state,  handle}: Props) {
  return (
    <button 
      type="button" 
      className={classNames('add-button', type)}
      onClick={handle}
    >
      {state ? <VscClose /> : <VscAdd />}

      {state ? 'Close' : title}
    </button>
  )
}

export default AddButton
