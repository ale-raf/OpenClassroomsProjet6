import fullStar from '../../assets/salmon-star.png'
import emptyStar from '../../assets/grey-star.png'
import '../../styles/Rating.css'

function Rating({ updateRatings }) {
    const ratings = new Array(updateRatings * 1).fill(updateRatings)
    
    for (let i = 0; i <= 5; i++) {
        if (updateRatings < i) ratings.push(i - updateRatings)
    }
    
    return (
        ratings.map((rating, index) => (
            <img key={`${rating}-${index}`} src={rating <= ratings ? fullStar : emptyStar } className='rating-stars' alt="rating"/>
        ))
    )
}

export default Rating