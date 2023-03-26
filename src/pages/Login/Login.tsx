import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { createUser } from "../../redux/states/user";
import { getMorty } from "../../services"
import { PrivateRoutes } from '../../models'

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const login = async () => {
    try {
      const result = await getMorty();
      dispatch(createUser(result))
      navigate('/', {replace: true})
    } catch (error) {
      
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <button onClick={login}>LOGIN</button>
    </div>
  )
}
export default Login
