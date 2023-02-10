// Write your code here
import './index.css'

const LogIn = props => {
  const {login} = props
  return (
    <button className="login-btn" type="button" onClick={login}>
      Login
    </button>
  )
}

export default LogIn
