import { useContext } from "react"
import { PageContext } from "../../../context/PageContext"

function Settings() {
  const { showSideBar } = useContext(PageContext)
  return (
    <div onClick={() => showSideBar(false)}>
      Settings
    </div>
  )
}

export default Settings
