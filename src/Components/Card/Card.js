import './Card.css';

const Card = (props) => {
    return (
        <div className="card">
            <img className='img-card' src={props.img} />
            <div className='info-card'>
                <h2 className='title-card'>{props.title}</h2>
                <span class="regua"></span>
                <p className='desc-card'>{props.descricao}</p>
                <input type="button" value="ACESSAR"></input>
            </div>
        </div>
    )
}
export default Card;