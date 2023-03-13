import datas from '../../data/data.json'
import Card from '../Card'
import '../../styles/Gallery.css'

function Gallery() {
    return (
        <main className="gallery-section">
            {datas.map((data) => (
                <Card key={data.id} id={data.id} title={data.title} cover={data.cover} description={data.description}/>
            ))}
        </main>
    )
}

export default Gallery