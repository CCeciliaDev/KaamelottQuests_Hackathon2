import DisplayKnights from './DisplayKnights';
import './Knights.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BsPlusLg } from "react-icons/bs";
import KnightCard from '../components/KnightCard'
// import ModalNewKnight from './ModalNewKnight'

const Knights = () => {
  const [knightInfo1, setKnightInfo1] = useState([])
  useEffect(() => {
    axios.get('http://localhost:4242/knights').then(response => {
      setKnightInfo1(response.data)
    })
  }, [])

  // const [isOpen, setIsOpen] = useState(false)
  // const [newKnightIsOpen, setNewKnightIsOpen] = useState(false)


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
                <KnightCard
                  knightInfo1={knightInfo}
                  key={knightInfo.id}
                />
              )
            })
          : null}
      </div>
      <div className='newsContainer'>
        <div className='news'>
      <div className='newKnight'>
      {/* <div style={{ display: isOpen ? 'block' : 'none' }}></div> */}
      <div
        className='boutonKnight'
        // onClick={() => {
        //   setNewKnightIsOpen(true)
        //   setIsOpen(false)
        //   window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        // }}
      >
        <p>Ajouter un chevalier à la table</p>
        <p><BsPlusLg className='iconePlus' /></p>
        {/* <ModalNewKnight
        open={newKnightIsOpen}
        onClose={() => newKnightIsOpen(false)}
        ></ModalNewKnight> */}
        </div>
    </div>
    </div>
    </div></div>
  )
}

export default Knights
