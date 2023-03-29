import { BsThreeDotsVertical } from 'react-icons/bs'
import { classNames } from '../../models'
import { ButtonType } from './ButtonUser'
import './styles/pure.scss'

interface Props{
    type: ButtonType,
}

function OptionsButton(props: Props) {
  return (
    <button className={classNames('options-button', props.type)} > 
        <BsThreeDotsVertical />
      
    </button>
  )
}

export default OptionsButton
