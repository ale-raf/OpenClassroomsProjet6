import React from 'react'
import { Link } from 'react-router-dom'
import data from '../../data/data.json'
import '../../styles/Home.css'

function Home() {
    return (
        <main className='home-main'>
            <div className='banner'>
                <h1 className="kasa-title">Chez vous, partout et ailleurs</h1>
            </div>
            <section className='home-section'>
                {data.map((card) => (
                    <Link to="/accomodation" className='card-link'>
                        <article className="home-card">
                            <img src={card.cover} alt={card.description}/>
                            <h2 className='card-title'>{card.title}</h2>
                        </article>
                    </Link>
                ))}
            </section>
        </main>
    )
}

export default Home