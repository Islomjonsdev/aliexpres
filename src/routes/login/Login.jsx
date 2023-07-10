import { useState } from 'react'
import "./Login.scss"
import { auth } from '../../firebase/config'
import { useHistory } from 'react-router-dom'

const Login = () => {
  const history = useHistory()
  const [possibleErrorLogin, setPossibleErrorLogin] = useState("")
  const [emailLogin, setEmailLogin] = useState("")
  const [passwordlogin, setPasswordLogin] = useState("")
  console.log(emailLogin, passwordlogin);
  function loginUser(evt) {
      evt.preventDefault()

      auth.signInWithEmailAndPassword(emailLogin, passwordlogin)
          .then(response => {
              if (response) {
                  history.push("/")
              }
          })
          .catch(err => {
              setPossibleErrorLogin(err.message)
          })
  }
  return (
    <div className='login'>
        <h1 className='login__heading'>Login</h1>
        {
            possibleErrorLogin && <p style={{color: "red", marginBottom: "10px"}}>{possibleErrorLogin}</p>
        }
        <form className='login__form' onSubmit={loginUser}>
            <label className='login__label'>Login</label>
            <input onChange={evt => {setEmailLogin(evt.target.value)}} className='login__email' required type="text" placeholder='Login'/>
            <label className='login__label'>Password</label>
            <input onChange={evt => {setPasswordLogin(evt.target.value)}} className='login__password' type="password" placeholder='Password'/>
            <button className='login__btn' type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login