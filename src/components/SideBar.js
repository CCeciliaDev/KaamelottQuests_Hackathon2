import Logo from '../assets/images/logo.png'
import './SideBar.css';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="Div-BtnLogin">
        <Link to='/quests' id='Btn-login'>Quêtes</Link>
        <Link to='/knights' id='Btn-account'>Chevaliers</Link>
      </div>
      <Link to='/'>
      <img className='Logo-img' src={Logo} alt='Logo Kaamelott'/>
      </Link>
      <div className="Div-BtnContact">
        <Link to='/contact' id='Btn-contact'>Contact</Link>
        <Link to='/team' id='Btn-team'>Team</Link>
      </div>
    </div>
  )
}

export default SideBar;