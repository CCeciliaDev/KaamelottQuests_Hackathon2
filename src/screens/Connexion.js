import './Connexion.css'
// import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Message from '../components/Message'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const Connect = (props) => {
  const [firstname, setFirstname] = useState('')
  const [password, setPassword] = useState('')
  const [id, setId] = useState('')
  const [king, setKing] = useState('')
  const [kingPassword, setKingPassword] = useState('')
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
  const [messageConf, setMessageConf] = useState('')
  const navigate = useNavigate()

  const handleClick = (e) => {
    e.preventDefault()

    axios
      .post(`http://localhost:4242/login/`, { firstname })
      .then((response) => {
        if (response.data.length > 0) {
          const id = response.data[0].id
          console.log(response.data)
          setMessageConf(`Bienvenue Sir ${firstname}`)
          if (firstname === 'Arthur' && password === 'IamTheKing') {
            setMessageConf(
              `Bienvenue Sir ${firstname} Pendragon, Roi de Bretagne`
            )
            navigate('/knights')
          } else if (
            firstname === response.data[0].firstname &&
            password === response.data[0].password
          ) {
            navigate(`/knights/${id}`)
          }
        } else if (firstname === 'Arthur' && password === 'IamTheKing') {
          setMessageConf(
            `Bienvenue Sir ${firstname} Pendragon, Roi de Bretagne`
          )
          navigate('/knights')
        } else {
          setMessageConf(`Mais tu n'es pas Sir Arthur ? Mécréaaant`)
          navigate('/')
        }
      })
  }

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
        <form className='Connexion' onSubmit={handleClick}>
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
        {
          isUserLoggedIn && <p>{messageConf}</p>
          //  && (
          //   <button onClick={handleClick}>Bonjour Sir Arthur</button> )
        }
      </div>
    </div>
  )
}

export default Connect
