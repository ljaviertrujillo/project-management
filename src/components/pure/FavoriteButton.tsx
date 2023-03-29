import './styles/pure.scss'
import { BsStar, BsStarFill } from 'react-icons/bs'
import { useContext } from 'react'
import { ProjectContext, ProjectContextProps } from '../../context'

function FavoriteButton({favorite, id}: {favorite: boolean, id: string}) {
  const {favProject} = useContext(ProjectContext)
  return (
    <button type='button'
     onClick={() => favProject(id)}
     className='favorite-button'>
        {favorite
            ? <BsStarFill />
            : <BsStar />}
    </button>
  )
}

export default FavoriteButton