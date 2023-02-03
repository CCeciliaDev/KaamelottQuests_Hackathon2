import './DisplayKnights.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'

const DisplayKnights = () => {
    const params = useParams()
    const [knightDetails, setKnightDetails] = useState()

    useEffect(() => {
        axios.get(`http://localhost:4242/knights/${params.id}`)
        .then(res => setKnightDetails(res.datat[0]))
    },[])

  return (
    <div className='mainOneDivDisplayKnights'>
      {console.log(params)}
      <h2 className='knightTitle'>
          - {knightDetails?.firstname}Name -
        </h2>
        <div className='mainDivDisplayKnights'>
      <div className='divNameImg'>
		    <p>{knightDetails?.image}images</p>
		    <p>{knightDetails?.power}power</p>
      </div>
      <div className='divDescEtc'>
        <p>{knightDetails?.origin}origine</p>
        <p>{knightDetails?.quest}Quests</p>
        <p>{knightDetails?.description}description</p>
    </div>
    </div>
	</div>
  );
}

export default DisplayKnights;