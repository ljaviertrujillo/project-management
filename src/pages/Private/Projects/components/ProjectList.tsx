import { DueDate, FavoriteButton, OptionsButton, PriorityTag } from '../../../../components/pure'
import { ButtonType } from '../../../../components/pure/ButtonUser'
import { ProjectInterface } from '../../../../models'
import { formatDate, lastUpdateTag } from '../../../../utilities/formattedDate'
import OpenProjectButton from './OpenProjectButton'

function ProjectList({ project }: { project: ProjectInterface }) {
  const {id, favorite, title, description, priority, dueDate, lastUpdate } = project
  return (
    <tr className='project-row'>
      <td><FavoriteButton favorite={favorite} id={id || ''} /></td>
      <td>{title}</td>
      <td>{description}</td>
      <td><PriorityTag priority={priority} /></td>
      <td>tags</td>
      <td>Members</td>
      <td><OpenProjectButton id={id || ''} /></td>
      <td>{formatDate(dueDate)}</td>
      <td>{lastUpdateTag(lastUpdate)}</td>
      <td><OptionsButton type={ButtonType.Small} /></td>
    </tr>
  )
}

export default ProjectList