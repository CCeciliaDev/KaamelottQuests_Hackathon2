import './Home.css';
import sword from '../assets/images/sword.png';
import rock from '../assets/images/rock2.png';

const Home = () => {
  return (
    <div className='mainDivHome'>
		  <h1 className='titleHome'>Kaamelott Quests</h1>
      <div>
      <img className='swordAnimation' src={sword} alt="épée" />
      </div>
      <div>
      <img className='rock' src={rock} alt="rocher" />
      </div>
      <div className='divDesc'>
        <p className='descHome'>Si vous êtes chevaliers à la recherche d'une quête, vous êtes au bon endroit.</p>
        <p className='descHome'>Vous voici dans le royaume de l'ogre.</p>
        <p className='descHome'>Le roi Arthur vous attend pour de nouvelles aventures !</p>
      {/* <div class="container">
        <div class="red flame"></div>
        <div class="orange flame"></div>
        <div class="yellow flame"></div>
        <div class="white flame"></div>
      </div>
      <div class="container2">
        <div class="red flame"></div>
        <div class="orange flame"></div>
        <div class="yellow flame"></div>
        <div class="white flame"></div>
      </div> */}
      </div>
	</div>
  );
}

export default Home;