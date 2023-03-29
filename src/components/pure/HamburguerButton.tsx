import './styles/pure.scss'
import {CgMenu} from 'react-icons/cg'
import { useContext } from 'react'
import { PageContext } from '../../context/PageContext'

function HamburguerButton() {
  const { sidebarOpen, showSideBar } = useContext(PageContext)
  return (
    <button type='button'
    className='hamburger-button'
    onClick={() => showSideBar(true)}>
      <CgMenu />
    </button>
  )
}

export default HamburguerButton
