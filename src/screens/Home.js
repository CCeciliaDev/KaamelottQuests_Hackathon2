import './Home.css'
import sword from '../assets/images/sword.png'
import rock from '../assets/images/rock2.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='mainDivHome'>
      <h1 className='titleHome'>Kaamelott Quests</h1>
      <div>
        <Link to='/connexion'>
          <img className='swordAnimation' src={sword} alt='épée' />
        </Link>
      </div>
      <div>
        <img className='rock' src={rock} alt='rocher' />
      </div>
      <div className='divDesc'>
        <p className='descHome'>
          Si vous êtes chevaliers à la recherche d'une quête, vous êtes au bon
          endroit.
        </p>
        <p className='descHome'>Vous voici dans le royaume de l'ogre.</p>
        <p className='descHome'>
          Le roi Arthur vous attend pour de nouvelles aventures !
        </p>
      </div>
    </div>
  )
}

export default Home
