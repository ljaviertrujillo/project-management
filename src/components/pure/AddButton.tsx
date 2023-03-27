import './styles/pure.scss'
import { ButtonType } from "./ButtonUser"
import { classNames } from '../../models'
import {VscAdd, VscClose} from 'react-icons/vsc'

interface Props{
    title: string,
    type: ButtonType,
}

function AddButton({title, type}: Props) {
  return (
    <button 
        type="button" 
        className={classNames('add-button', type)}>
        <VscAdd />
        {title}
    </button>
  )
}

export default AddButton
