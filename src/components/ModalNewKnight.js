import "./ModalNewKnight.css"
import ReactDOM from 'react-dom'
import { SlClose } from 'react-icons/sl'

const ModalNewKnight = ({ open, children, onClose }) => {
  // Conditionne l'affichage du Modal
  if (!open) return null
  return ReactDOM.createPortal(
    <div>
      <div className='overlayModal'></div>
      <div className='modalStyle'>
        {children}
        <form>
          <input name="name" type="text" class="feedback-input" placeholder="Nom" />
          <input name="origin" type="text" class="feedback-input" placeholder="Origine" /> 
          <input name="email" type="text" class="feedback-input" placeholder="Email" />    
          <input name="name" type="password" class="feedback-input" placeholder="Mot de passe" />      
          <textarea name="text" class="feedback-input" placeholder="Commentaire"></textarea>
        </form>
        <button className='crossModaleButtonResp' onClick={onClose}>
            <SlClose />
          </button>
        </div>
      </div>,
    //VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
    document.getElementById('portal')
    //VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
  )
}

export default ModalNewKnight