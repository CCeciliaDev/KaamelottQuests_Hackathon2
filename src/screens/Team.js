import "./Team.css";
import { FaLinkedinIn } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'

const Team = () => {
  return (
    <div className='teamMain'>
      <div className='serviceDescription'>
        <h2 className='knightTitle'>- Les chevaliers de la table SQL -</h2>
        <hr className='una'></hr>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4 col-sm-6'>
            <div className='our-team'>
              <img src={require('../assets/images/team4.jpg')} alt='destroy' />
                <div className='team-content'>
                  <h3 className='title'>Hélène</h3>
                  <span className='post'>Chevalier Back</span>
                  <ul className='social'>
                    <li>
                      <a
                        href='https://www.linkedin.com/in/helene-blanche/'
                        target='_blank'
                        rel='noreferrer'
                      >
                        <FaLinkedinIn className='socialIcon' />
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://github.com/Heleneb1'
                        target='_blank'
                        rel='noreferrer'
                      >
                        <FaGithub className='socialIcon' />
                      </a>
                    </li>
                  </ul>
                </div>
            </div>
          </div>
          <div className='col-md-4 col-sm-6'>
            <div className='our-team'>
              <img src={require('../assets/images/team3.jpg')} alt='destroy' />
                <div className='team-content'>
                  <h3 className='title'>Valter</h3>
                  <span className='post'>Chevalier Front</span>
                  <ul className='social'>
                    <li>
                      <a
                        href='https://www.linkedin.com/in/valter-barbosa40/'
                        target='_blank'
                        rel='noreferrer'
                      >
                        <FaLinkedinIn className='socialIcon' />
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://github.com/Wally-Shift'
                        target='_blank'
                        rel='noreferrer'
                      >
                        <FaGithub className='socialIcon' />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          <div className='col-md-4 col-sm-6'>
            <div className='our-team'>
              <img src={require('../assets/images/team2.jpg')} alt='destroy' />
                <div className='team-content'>
                  <h3 className='title'>Cécilia</h3>
                  <span className='post'>Chevalier Front</span>
                  <ul className='social'>
                    <li>
                      <a
                        href='https://www.linkedin.com/in/cecilia-caillaud/'
                        target='_blank'
                        rel='noreferrer'
                      >
                        <FaLinkedinIn className='socialIcon' />
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://github.com/CCeciliaDev'
                        target='_blank'
                        rel='noreferrer'
                      >
                        <FaGithub className='socialIcon' />
                      </a>
                    </li>
                  </ul>
                </div>
            </div>
          </div>
          <div className='col-md-4 col-sm-6'>
            <div className='our-team'>
              <img src={require('../assets/images/team1.jpg')} alt='destroy' />
                <div className='team-content'>
                  <h3 className='title'>Alexandre</h3>
                  <span className='post'>Chevalier Back</span>
                  <ul className='social'>
                    <li>
                      <a
                        href='https://www.linkedin.com/in/alexandre-levillain/'
                        target='_blank'
                        rel='noreferrer'
                      >
                        <FaLinkedinIn className='socialIcon' />
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://github.com/Newaluigi'
                        target='_blank'
                        rel='noreferrer'
                      >
                        <FaGithub className='socialIcon' />
                      </a>
                    </li>
                  </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <p>L'équipe vous remercie de votre visite et n'hésitez pas à nous contacter !</p>
      <p>A bientôt !</p>
    </div>
  );
}

export default Team;
