import DisplayKnights from './DisplayKnights';
import './Knights.css';
import nodeImg from '../assets/images/Noeud2.png';

const Knights = () => {
  return (
    <div className='mainDivKnights'>
      <div className='divTitleFex'>
      <img className='node' src={nodeImg} alt="noeud" />
      <h2 className='titleKnights' >Chevaliers</h2>
      <img className='node' src={nodeImg} alt="noeud" />

      </div>
      <div className='divKnightsFlex'>
		    <DisplayKnights />
        <DisplayKnights />
        <DisplayKnights />
    </div>
	</div>
  );
}

export default Knights;