import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { PublicRoutes } from "../../models"
import { resetUser, userKey } from "../../redux/states/user"
import { clearLocalStorage } from "../../utilities"
import { UtilityButton } from "../pure"
import { ButtonType } from "../pure/ButtonUser"

function Logout() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const logOut = () => {
        clearLocalStorage(userKey)
        dispatch(resetUser())
        navigate(`/${PublicRoutes.LOGIN}`, {replace: true})
    }

  return (
    <UtilityButton type={ButtonType.Large} title='Logout' handle={logOut} />
  )
}

export default Logout
