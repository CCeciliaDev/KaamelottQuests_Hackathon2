import './ModalQuest.css'

function QuestModal({
  power_required,
  description,
  bestiairy,
  id,
  name,
  artifact,
  closeModal,
  location,
  Knights_required,
  isOpen,
  reward,
}) {
  if (!isOpen) {
    return null
  }

  return (
    <div className='MQ-all'>
      <div className='modalBg'>
        <button className='MQ-quests1' onClick={() => closeModal(false)}>
          X
        </button>
        <div className='titre'>
          <h1>{name}</h1>
        </div>
        <div>
          <p>Description : {description} </p>
          <p>Bestiaire : {bestiairy}</p>
          <p>Artéfact : {artifact}</p>
          <p>Lieu de la Quête : {location}</p>
          <p>
            Nombre de chevaliers requis pour cette mission : {Knights_required}
          </p>
          <p>Puissance requise : {power_required} xp </p>
          <p>Récompense : {reward} xp </p>
        </div>
        <div className='footer'>
          <button className='MQ-quests' onClick={() => closeModal(false)}>
            Annuler
          </button>
          {/* <button className='MQ-quests'> Continuer</button> */}
        </div>
      </div>
    </div>
  )
}
export default QuestModal
