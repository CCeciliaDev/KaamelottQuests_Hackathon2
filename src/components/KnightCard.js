import './KnightCard.css';
import BohortImg from '../assets/images/Bohort.png';


const KnightCard = () => {
  return (
    <div class="mainDivKnightCard" >
	<img className='imgCard' src={BohortImg} alt="bohort" />
    <h6 className='nameKnightCard gold'>Bohort</h6>
	</div>
  );
}

export default KnightCard;