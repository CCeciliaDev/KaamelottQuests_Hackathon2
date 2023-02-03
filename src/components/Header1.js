import './Header1.css';

const Header1 = () => {
  return (
    <div className="Div-BtnLogin">
      {/* Faire une boite de connexion en modal (ou pas)*/}
      <span id='Btn-login'>Connexion</span>
      {/* Faire un form de creation compte en modal (ou pas)*/}
      <span id='Btn-account'>Inscription</span>
      {/* Se déconnecter puis revenir a Home*/}
      <span id='Btn-deco'>Déconnexion</span>
    </div>
  )
}

export default Header1;