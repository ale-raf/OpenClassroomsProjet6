import data from '../../data/data.json';
import Collapse from '../Collapse/Collapse';
import Gallery from '../Gallery/Gallery';
import Rating from '../Rating/Rating';
import Tags from '../Tags/Tags';
import '../../styles/Accomodation.css';


function Accomodation() {
    return (
        <main className='main-accomodation'>
            <Gallery />
            <section className='section-top'>
                <div className='left-div'>
                    <h1>{data[0].title}</h1>
                    <p>{data[0].location}</p>
                    <ul className='tags'>
                        {/* <Tags /> */}
                    </ul>
                </div>
                <div className='right-div'>
                    <div>
                        <h2>{data[0].host.name}</h2>
                        <img src={data[0].host.picture} className="profile-picture" alt={data[0].host.name} />
                    </div>
                    <div>
                        {/* <Rating ratings={data[0].rating}/> */}
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