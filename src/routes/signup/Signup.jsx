import { useState } from 'react'
import "./Signup.scss"
import { auth } from '../../firebase/config'
import { useHistory } from 'react-router-dom'

const Signup = () => {
  const history = useHistory()
  const [possibleError,  setPossibleError] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const createUser = (evt) => {
    evt.preventDefault()

    auth.createUserWithEmailAndPassword(email, password)
        .then(response => {
          if (response) {
            history.push("/login")
          }
        })
        .catch(err => {
          setPossibleError(err.message)
        })
  }
  return (
    <div className='signup'>
      {
          possibleError && <p style={{color: "red", marginBottom: "10px"}}>{possibleError}</p>
      }
        <h1 className='signup__heading'>Sign Up</h1>
        <form className='signup__form' onSubmit={createUser}>
            <label className='signup__label'>Enter Email</label>
            <input onChange={evt => {setEmail(evt.target.value)}} className='signup__email' required placeholder='Enter email' type="text" />
            <label className='signup__label'>Enter Password</label>
            <input onChange={evt => setPassword(evt.target.value)} className='signup__password' placeholder='Enter password' type="password" />
            <button className='signup__btn' type='submit'>Сreate an account</button>
        </form>
    </div>
  )
}

export default Signup