import './ScreenQuest.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import QuestCard from '../components/QuestCard'

const ScreenQuest = () => {
  //   const [isSeleted, setIsSelected] = useState(false)
  //   const handleClick = () => {
  // setIsSelected((preState) => !preState)
  //   }
  const [quests, setQuests] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:4242/quests')
      .then((res) => setQuests(res.data))
      .catch((err) => console.error(err))
  }, [])

  return (
    <div className='QC-container'>
      {/* <button onClick={handleClick}> QUEST </button> */}
      {quests.map((quest) => (
        <QuestCard
          key={quest.ID}
          ID={quest.ID}
          NAME={quest.NAME}
          DESCRIPTION={quest.DESCRIPTION}
          ARTIFACT={quest.ARTIFACT}
          POWER_REQUIRED={quest.POWER_REQUIRED}
          BESTIARY={quest.BESTIARY}
          KNIGHTS_REQUIRED={quest.KNIGHTS_REQUIRED}
          LOCATION={quest.LOCATION}
          //   image={quest.image}
        />
      ))}
    </div>
  )
}

export default ScreenQuest
