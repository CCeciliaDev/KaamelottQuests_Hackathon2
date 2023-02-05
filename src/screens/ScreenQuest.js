import './ScreenQuest.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import QuestCard from '../components/QuestCard'

const ScreenQuest = () => {
  const [quests, setQuests] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:4242/quests')
      .then((res) => setQuests(res.data))
      .catch((err) => console.error(err))
  }, [])

  return (
    <div className='questBody'>
      <div className='serviceDescription'>
        <h2 className='knightTitle'>
          - Liste des quêtes -
        </h2>
        <div className='descriptionText'>
          Voici la liste des quêtes disponibles, bougez-vous les miches et tâchez de vous montrer utile !
        </div></div>
    <div className='QC-container'>
      {quests.map((quest) => (
        <QuestCard className='card'
          key={quest.ID}
          ID={quest.ID}
          NAME={quest.NAME}
          DESCRIPTION={quest.DESCRIPTION}
          ARTIFACT={quest.ARTIFACT}
          POWER_REQUIRED={quest.POWER_REQUIRED}
          BESTIARY={quest.BESTIARY}
          KNIGHTS_REQUIRED={quest.KNIGHTS_REQUIRED}
          LOCATION={quest.LOCATION}
        />
      ))}
    </div></div>
  )
}

export default ScreenQuest
