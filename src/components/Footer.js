import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <div className="Div-BtnContact">
      <span id='Btn-contact'>Contact</span>
      <Link to='/team' id='Btn-team'>Team</Link>
    </div>
  )
}

export default Footer;