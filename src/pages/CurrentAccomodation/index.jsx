import { useParams } from 'react-router-dom';
import datas from '../../datas/data.json'
import Header from '../../components/Header';
import Slideshow from '../../components/Slideshow';
import Tags from '../../components/Tags';
import Rating from '../../components/Rating';
import Collapse from '../../components/Collapse';
import Footer from '../../components/Footer';
import '../../styles/Accomodation.css';

function CurrentAccomodation() {
    const { id } = useParams()
    const currentCardPage = datas.filter((data) => data.id === id)

    return ( 
        <>
            <Header />
            <main className='main-accomodation'>
                {currentCardPage.map((data) => ( 
                <div key={data.id}>            
                    <Slideshow slider={data.pictures} />
                    <section className='section-top'>
                        <div className='left-div'>
                            <h1>{data.title}</h1>
                            <p>{data.location}</p>
                            <Tags tags={data.tags} />
                        </div>
                        <div className='right-div'>
                            <div>
                                <h2>{data.host.name}</h2>
                                <img src={data.host.picture} className="profile-picture" alt={data.host.name} />
                            </div>
                            <div>
                                <Rating eachRating={data.rating} />
                            </div>
                        </div>
                    </section>
                    <section className='section-bottom'>
                        <Collapse title="Description" description={data.description} />
                        <Collapse title="Équipements" description={data.equipments} />
                    </section>     
                </div>
                ))}
            </main>
            <Footer />
        </>
    )
}

export default CurrentAccomodation