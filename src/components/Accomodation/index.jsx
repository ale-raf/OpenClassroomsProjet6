import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Header from '../Header';
import Slideshow from '../Slideshow/Slideshow';
import Tags from '../Tags';
import Rating from '../Rating';
import Collapse from '../Collapse';
import Footer from '../Footer';
import datas from '../../data/data.json'
import '../../styles/Accomodation.css';

function Accomodation() {
    const { id } = useParams()
    let location = useLocation()
    let path = location.pathname
    console.log(path)
    // const [update, setUpdate] = useState(true)

    useEffect(() => {
            if (path === '/:id')
            datas.filter((card) => card.id === id)
            // setUpdate(!update)
    }, [])

    return (
        <>
        <Header />
        <div className='main-accomodation'>
            {datas
                .filter((card) => card.id === id)
                .map((card, index) => ( 
            <main key={index}>            
                <Slideshow data={datas} id={id} />
                <section className='section-top'>
                    <div className='left-div'>
                        <h1>{card.title}</h1>
                        <p>{card.location}</p>
                        <Tags data={datas} id={card.id} tags={card.tags}/>
                    </div>
                    <div className='right-div'>
                        <div>
                            <h2>{card.host.name}</h2>
                            <img src={card.host.picture} className="profile-picture" alt={card.host.name} />
                        </div>
                        <div>
                            <Rating rate={card.tags} />
                        </div>
                    </div>
                </section>
                <section className='section-bottom'>
                    <Collapse title="Description" description={card.description}/>
                    <Collapse title="Équipements" description={card.equipments}/>
                </section>     
            </main>
            ))}
        </div>
        <Footer />
        </>
    )
}

export default Accomodation