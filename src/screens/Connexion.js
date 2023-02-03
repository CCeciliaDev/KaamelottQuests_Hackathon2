import './Connexion.css'
function Connect({ closeModal }) {
  return (
    <div className='Connect-all'>
      <div className='Card'>
        <h1>Bienvenue Messire !</h1>

        <div className='Script'>
          <div className='User'>
            <h2>Nom d'utilisateur :</h2>
            <input type='text' required placeholder='nom'></input>
          </div>

          <div className='Password'>
            <h2>Mot de passe :</h2>
            <input type='text' required placeholder='mot de passe'></input>
          </div>
        </div>
        <div className='Container-bouton'>
          <button className='connect' onClick={() => closeModal(false)}>
            VALIDER
          </button>
        </div>
      </div>
    </div>
  )
}

export default Connect
