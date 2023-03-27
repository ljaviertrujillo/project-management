import './styles/pure.scss'
import { BsArrowLeftShort } from 'react-icons/bs'
import { Link, Navigate } from 'react-router-dom'
import { PrivateRoutes } from '../../models'
import { Projects } from '../../pages/Private/Projects'

interface Props{
  route: string
}

function BackButton({route}: Props) {
  return (
    <Link to={route} className='back-button'>
      <BsArrowLeftShort />
      Back
    </Link>
  )
}

export default BackButton
