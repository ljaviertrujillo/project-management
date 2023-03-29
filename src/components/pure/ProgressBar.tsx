import './styles/pure.scss'
import { STATUS, TaskInterface } from "../../models"

interface Props{
  tasks?: TaskInterface[],
}

function ProgressBar(props: Props) {
  if(props.tasks){
    const totalTasks = props.tasks.length
    const completedTasks = props.tasks.filter(task => task.status === STATUS.DONE).length
    const percentage = totalTasks !== 0 ? Math.round((completedTasks / totalTasks)*100) : 0
    return(
      <div className="progress" >
        {percentage + '%'}
        <div className="bar">
          <div className="done" style={{width:percentage}}></div>
        </div>
      </div>
    )
  }

  return (
    <></>
  )

}

export default ProgressBar
