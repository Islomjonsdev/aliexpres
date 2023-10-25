import { useState } from 'react'
import "./Login.scss"
import { auth, provider } from '../../firebase/config'
import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Login = () => {
  const { t } = useTranslation()
  const history = useHistory()
  const [possibleErrorLogin, setPossibleErrorLogin] = useState("")
  const [emailLogin, setEmailLogin] = useState("")
  const [passwordlogin, setPasswordLogin] = useState("")

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

  const loginInWithGooge = (evt) => {
        evt.preventDefault()

        auth.signInWithPopup(provider)
            .then(response => console.log(response))
            .catch(err => console.log(err.message))
  }
  
  return (
    <div className='login'>
        <h1 className='login__heading'>{t("login")}</h1>
        {
            possibleErrorLogin && <p style={{color: "red", marginBottom: "10px"}}>{possibleErrorLogin}</p>
        }
        <form className='login__form' onSubmit={loginUser}>
            <label className='login__label'>{t("login")}</label>
            <input onChange={evt => {setEmailLogin(evt.target.value)}} className='login__email' required type="text" placeholder='Login'/>
            <label className='login__label'>{t("password")}</label>
            <input onChange={evt => {setPasswordLogin(evt.target.value)}} className='login__password' type="password" minLength={8} placeholder='Password'/>
            <button className='login__btn' type='submit'>{t("login")}</button>
        </form>
        <button className='login__with__google' onClick={loginInWithGooge}>Sign in with google</button>
    </div>
  )
}

export default Login