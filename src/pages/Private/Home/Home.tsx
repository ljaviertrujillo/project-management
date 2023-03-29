import { useContext } from "react"
import { PageContext } from "../../../context/PageContext"

function Home() {
  const {showSideBar} = useContext(PageContext)
  return (
    <div  onClick={() => showSideBar(false)}>
      Home
    </div>
  )
}

export default Home
