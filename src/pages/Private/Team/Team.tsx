import { useContext } from "react"
import { PageContext } from "../../../context/PageContext"

function Team() {
  const { showSideBar } = useContext(PageContext)
  return (
    <div  onClick={() => showSideBar(false)}>
      Team
    </div>
  )
}

export default Team
