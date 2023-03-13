import data from '../../data/data.json'
import fullStar from '../../assets/salmon-star.png'
import emptyStar from '../../assets/grey-star.png'
// import { useState } from 'react'

function Rating({ rate }) {
    const rating = data[2].rating
    const ratings = new Array(rating * 1).fill(rating)
    ratings.push(5, 5)

    return (
        ratings.map((rate, index) => (
            <img key={`${rate}-${index}`} src={rate <= ratings ? fullStar : emptyStar } alt="rating"/>
        ))
    )
}

export default Rating