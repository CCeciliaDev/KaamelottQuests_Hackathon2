import "./Contact.css";
import son1 from "../assets/sons/son1.mp3"

const Contact = () => {
    let audio1 = new Audio(son1)
    const start = () => {
      audio1.play()
      alert('Le père Blaise prendra connaissance au plus vite de votre doléance...')
    }
  return (
    <div>
        <h2 className='contactTitle'>Vous en avez gros ? Ecrivez nous!</h2>
		<form>      
            <input name="name" type="text" class="feedback-input" placeholder="Nom" />   
            <input name="email" type="text" class="feedback-input" placeholder="Email" />
            <textarea name="text" class="feedback-input" placeholder="Commentaire"></textarea>
        </form>
        <button onClick={start} className="submit" value="SUBMIT">Soumettre</button>
	</div>
);
}

export default Contact;
