import Footer from './Footer';
import Header1 from './Header1';

import Logo from '../assets/images/logo.png'
import './SideBar.css';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className="sidebar">
      <Header1 />
      <Link to='/'>
      <img className='Logo-img' src={Logo} alt='Logo Kaamelott'/>
      </Link>
      <Footer />
    </div>
  )
}

export default SideBar;