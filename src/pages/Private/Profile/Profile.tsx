import { useContext } from "react"
import { PageContext } from "../../../context/PageContext"

function Profile() {
  const { showSideBar } = useContext(PageContext)
  return (
    <div  onClick={() => showSideBar(false)}>
      Profile
    </div>
  )
}

export default Profile
