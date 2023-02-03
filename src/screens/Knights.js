import DisplayKnights from './DisplayKnights';
import './Knights.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Knights = () => {
  const [knightInfo1, setKnightInfo1] = useState([])
  useEffect(() => {
    axios.get('http://localhost:4242/knights').then(response => {
      setKnightInfo1(response.data)
    })
  }, [])

  return (
    <div className='bodyKnights'>
      <div className='serviceDescription'>
        <h2 className='knightTitle'>
          - Vos chevaliers -
        </h2>
        <div className='descriptionText'>
          Voici la liste de vos chevaliers, sélectionnez un profil afin de voir les quêtes en cours
        </div>
        <hr className='una'></hr>
      </div>
      <div className='listKnights'>
        {knightInfo1
          ? knightInfo1.map(knightInfo => {
              return (
                <DisplayKnights
                  knightInfo1={knightInfo}
                  key={knightInfo.id}
                />
              )
            })
          : null}
      </div>
    </div>
  )
}



export default Knights;