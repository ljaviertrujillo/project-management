import { useContext } from "react"
import Logout from "../../../components/container/Logout"
import { PageContext } from "../../../context/PageContext"

function Dashboard() {
  const {showSideBar} = useContext(PageContext)
  return (
    <div onClick={() => showSideBar(false)}>
      Dashboard
      
    </div>
  )
}

export default Dashboard
