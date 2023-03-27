import './styles/pure.scss'
import {classNames} from '../../models'

export enum ButtonType{
  Large = 'large',
  Small = 'small'
}

interface Props {
  type: ButtonType
  handle: () => void
}

function User({type, handle}: Props) {
  return (
    <button
        type="button"
        className={classNames('user-button', type)}
        onClick={handle}
    >
        <div className='label'>J</div>
        {type !== 'large' 
            ? <span>Javier Trujillo</span>
            : null  
        }
    </button>
  )
}

export default User
