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
    <div className='modalBg'>
      <button onClick={() => closeModal(false)}>X</button>
      <div className='titre'>
        <h1> NOM :{name}</h1>
      </div>
      <div>
        <p>DESCRIPTION :{description} </p>
        <p>{bestiairy}</p>
        <p>{artifact}</p>
        <p>{location}</p>
        <p>{Knights_required}</p>
        <p>{power_required}</p>
        <p>{reward}</p>
      </div>
      <div className='footer'>
        <button onClick={() => closeModal(false)}>Annuler</button>
        <button> Continuer</button>
      </div>
    </div>
  )
}
export default QuestModal
