import data from '../../data/data.json';
import Collapse from '../Collapse/Collapse';
import '../../styles/Accomodation.css';
import rating from '../../assets/salmon-star.png'

function Accomodation() {
    return (
        <main className='main-accomodation'>
            <div>
                <img src={data[0].cover} className="accomodation-img" alt={data[0].description}/>
            </div>
            <section className='section-top'>
                <div className='left-div'>
                    <h1>{data[0].title}</h1>
                    <p>{data[0].location}</p>
                    <ul className='tags'>
                        <li>{data[0].tags[0]}</li>
                        <li>{data[0].tags[1]}</li>
                        <li></li>
                    </ul>
                </div>
                <div className='right-div'>
                    <div>
                        <h2>{data[0].host.name}</h2>
                        <img src={data[0].host.picture} className="profile-picture" alt={data[0].host.name} />
                    </div>
                    <div>
                        <img src={rating} alt=""/>
                        <img src={rating} alt=""/>
                        <img src={rating} alt=""/>
                        <img src={rating} alt=""/>
                        <img src={rating} alt=""/>
                    </div>
                </div>
            </section>
            <section className='section-bottom'>
                <Collapse data="Description" value={data[0].description}/>
                <Collapse data="Équipements" value={data[0].equipments}/>
            </section>
        </main>
    )
}

export default Accomodation