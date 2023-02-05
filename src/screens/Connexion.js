import './Connexion.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Message from '../components/Message'

const Connect = (props) => {
  const [firstname, setFirstname] = useState('')
  const [password, setPassword] = useState('')
  const [king, setKing] = useState('')
  const [kingPassword, setKingPassword] = useState('')
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
  const [messageConf, setMessageConf] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (firstname.includes(firstname) && password.includes(password)) {
      localStorage.setItem('chevaliers', JSON.stringify(firstname))
      setMessageConf()
    } else {
      setMessageConf(`Mais tu n'es pas Sir Arthur `)
    }
    setIsUserLoggedIn((prevState) => !prevState)
  }

  useEffect(() => {
    axios
      .get(`http://localhost:4242/knights/1 `)
      .then((response) => response.data)
      .then((data) => {
        setKingPassword(data.map((element) => element.password))
        setKing(data.map((element) => element.firstname))
      })
  }, [])
  function myFunction() {
    const x = document.getElementById('MDP')
    if (x.type === 'password') {
      x.type = 'text'
    } else {
      x.type = 'password'
    }
  }
  return (
    <div className='Connect-all'>
      <div className='Card'>
        <form className='Connexion' onSubmit={handleSubmit}>
          <label>
            <h1>Bienvenue Messire !</h1>

            <div className='Script'>
              <div className='User'>
                <h2>Nom d'utilisateur :</h2>
                <input
                  className='knightName'
                  type='text'
                  required
                  placeholder='nom'
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </div>

              <div className='Password'>
                <h2>Mot de passe :</h2>
                <input
                  className='knightPassword'
                  type='password'
                  required
                  placeholder=' mot de passe '
                  value={password}
                  id='MDP'
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input
                  className='check'
                  type='checkbox'
                  onClick={() => myFunction()}
                />
              </div>
            </div>
          </label>
          <button className='connect' type='sumit' value='submit'>
            VALIDEZ
          </button>
        </form>
        {isUserLoggedIn && <Message messageConf={messageConf} /> && (
          <Link to={'/knights'}>
            WELCOME Messire
            <br />
            {firstname} ! <br />
            Cliquez ici
          </Link>
        )}
      </div>
    </div>
  )
}

export default Connect
