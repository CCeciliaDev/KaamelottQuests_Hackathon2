import './ModalQuest.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Knights from '../screens/Knights'

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
        <button onClick={() => closeModal(false)}>X</button>
        <div className='titre'>
          <h1> NOM : {name}</h1>
        </div>
        <div>
          <p>DESCRIPTION : {description} </p>
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
          <button onClick={() => closeModal(false)}>Annuler</button>
          <button> Continuer</button>
        </div>
      </div>
    </div>
  )
}
export default QuestModal
