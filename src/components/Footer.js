import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <div className="Div-BtnContact">
      <Link to='/contact' id='Btn-contact'>Contact</Link>
      <Link to='/team' id='Btn-team'>Team</Link>
    </div>
  )
}

export default Footer;