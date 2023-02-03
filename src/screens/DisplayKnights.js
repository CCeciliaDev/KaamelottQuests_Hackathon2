import './DisplayKnights.css';


const DisplayKnights = () => {
  return (
    <div className='mainOneDivDisplayKnights'>
      <h2 className='knightTitle'>
          - Name -
        </h2>
        <div className='mainDivDisplayKnights'>
      <div className='divNameImg'>
		    <p>images</p>
		    <p>firstname</p>
      </div>
      <div className='divDescEtc'>
        <p>origine</p>
        <p>power%</p>
        <p>Quests</p>
        <p>description</p>
    </div>
    </div>
	</div>
  );
}

export default DisplayKnights;