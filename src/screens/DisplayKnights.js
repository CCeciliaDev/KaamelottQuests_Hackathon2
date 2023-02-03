import './DisplayKnights.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const DisplayKnights = () => {
  const params = useParams()
  const [knightDetails, setKnightDetails] = useState()

  useEffect(()=>{
      axios.get(`http://localhost:4242/knights/${params.id}`)
      .then(res => setKnightDetails(res.data[0]))
  },[]) 

  return (
    <div className='mainOneDivDisplayKnights'>
      {console.log(params)}
      <h2 className='knightTitle'style={{textDecoration: 'none'}}>
          - {knightDetails?.firstname} -
        </h2>
        <div className='mainDivDisplayKnights'>
      <div className='divNameImg'>
		    <img src={knightDetails?.image} />

      </div>
      <div className='divDescEtc'>
        <p>Origine : <br></br>{knightDetails?.origine}</p>
        <p>Puissance : <br></br>{knightDetails?.power} xp</p>
        <p>Quête en cours : <br></br>Quête du graal
          {/* {knightDetails?.quests} */}
          </p>
        <p>{knightDetails?.description}</p>
    </div>
    </div>
	</div>
  );
}

export default DisplayKnights;