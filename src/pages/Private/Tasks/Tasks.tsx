import { useContext } from "react"
import { PageContext } from "../../../context/PageContext"

function Tasks() {
  const { showSideBar } = useContext(PageContext)
  return (
    <div onClick={() => showSideBar(false)}>
      Tasks
    </div>
  )
}

export default Tasks
