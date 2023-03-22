import fullStar from '../../assets/salmon-star.png'
import emptyStar from '../../assets/grey-star.png'
import '../../styles/Rating.css'

function Rating({ eachRating }) {
    const ratings = new Array(eachRating * 1).fill(eachRating)
    
    for (let i = 0; i <= 5; i++) {
        if (eachRating < i) ratings.push(i - eachRating)
    }
    
    return (
        ratings.map((rating, index) => (
            <img key={`${rating}-${index}`} src={rating <= ratings ? fullStar : emptyStar } className='rating-stars' alt="rating"/>
        ))
    )
}

export default Rating