import './Home.css';

const Home = () => {
  return (
    <div className='mainDivHome'>
      <h2 className='preTitleHome'>Bienvenue sur</h2>
		  <h1 className='titleHome'>Kaamelott Quests</h1>
      <div className='divDesc'>
      <p className='descHome'>Si vous êtes chevaliers à la recherche d'une quête, vous êtes au bon endroit.</p>
      <p className='descHome'>Vous voici dans le royaume de l'ogre.</p>
      <p className='descHome'>Le roi Arthur vous attend pour de nouvelles aventures !</p>
      </div>
	</div>
  );
}

export default Home;