import { Link } from "react-router-dom"
import '../../styles/Card.css'

function Card({ id, title, cover }) {
    return (
        <Link to={`/accomodation/${id}`} className='card-link'>
            <article className="home-card">
                <img src={cover} alt={title}/>
                <h2 className='card-title'>{title}</h2>
            </article>
        </Link>
    )
}

export default Card

