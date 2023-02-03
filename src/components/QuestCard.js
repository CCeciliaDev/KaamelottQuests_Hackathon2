import React from 'react'
import { useEffect, useState } from 'react'
import Medieval from '../assets/images/Medieval_quest.png'
import QuestModal from './ModalQuest'

function QuestCard({
  ID,
  NAME,
  DESCRIPTION,
  ARTIFACT,
  POWER_REQUIRED,
  LOCATION,
  BESTIARY,
  KNIGHTS_REQUIRED,
}) {
  const [isSeleted, setIsSelected] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const handleClick = () => {
    setIsSelected((preState) => !preState)
  }
  return (
    <div className='QC-all'>
      <button onClick={handleClick}> QUEST </button>
      <button className='openModalBtn' onClick={() => setOpenModal(true)}>
        Details
      </button>
      {openModal && (
        <QuestModal
          id={ID}
          name={NAME}
          description={DESCRIPTION}
          artifact={ARTIFACT}
          power_required={POWER_REQUIRED}
          bestiary={BESTIARY}
          knights_required={KNIGHTS_REQUIRED}
          location={LOCATION}
          isOpen={openModal}
          closeModal={() => setOpenModal(false)}
        />
      )}
      <div className='QC-title'>
        <h1>{NAME}</h1>
      </div>
      <img className='QC-picture' src={Medieval} alt=''></img>
      <div className='QC-description'>{DESCRIPTION}</div>
    </div>
  )
}
export default QuestCard
