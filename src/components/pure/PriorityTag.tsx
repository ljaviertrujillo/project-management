import './styles/pure.scss'
import {FcHighPriority, FcLowPriority, FcMediumPriority} from 'react-icons/fc'
import { classNames, PRIORITY } from '../../models'

interface Props{
    priority: string
}

function PriorityTag(props: Props) {
  return (
    <div className={classNames('priority-tag', props.priority)}>
        {props.priority === PRIORITY.HIGH
            ? <FcHighPriority />
            : props.priority === PRIORITY.MEDIUM
                ? <FcMediumPriority />
                : <FcLowPriority />
        }
        {props.priority.toUpperCase()}
    </div>
  )
}

export default PriorityTag