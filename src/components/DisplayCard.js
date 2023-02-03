
const DisplayCard = (props) => {

    return (
        <div className='mainDivKnightCard'>
						<img
							className='imgCard'
							src={props.img}
							alt={props.firstname}
						/>
						<h6 className='nameKnightCard gold'>{props.firstname} </h6>
					</div>
    )
}
export default DisplayCard;