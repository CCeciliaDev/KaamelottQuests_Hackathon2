import './KnightCard.css';
import { useState, useEffect } from 'react'
import axios from 'axios'
import DisplayCard from '../components/DisplayCard'


const KnightCard = () => {

  const [knights, setKnights] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:4242/knights')
      .then((res) => setKnights(res.data))
      .catch((err) => console.error(err))
  }, [])

  return (
    <div>
			{knights.map((knight) => {
				return (
          <DisplayCard img={knight.image} firstname={knight.firstname} />

					
				)
			})}
		</div>
  );
}




export default KnightCard;