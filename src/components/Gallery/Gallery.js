import '../../styles/Gallery.css'
import prev from '../../assets/previous.png';
import next from '../../assets/next.png';
import { useRef, useState } from 'react';
import data from '../../data/data.json';



function Gallery(props) {
    const [count, setCount] = useState(1);
    const [index, setIndex] = useState(0)

    function previousImage() {
        setCount(count - 1)
        setIndex(index - 1)
        if (count === 1 && index === 0) {
            setCount(data[0].pictures.length)
            setIndex(data[0].pictures.length - 1)
        }
    }

    function nextImage() {
        setCount(count + 1)
        setIndex(index + 1)
        if (count && index === data[0].pictures.length - 1) {
            setCount(1)
            setIndex(0)
        }
    }

    return (
        <div className='gallery-wrap'>
            <img src={prev} onClick={previousImage} alt="previous"/>
            { <img src={data[0].pictures[index]} className="gallery-img" alt={data[0].description}/> }
            <p>{count}/{data[0].pictures.length}</p>
            <img src={next} onClick={nextImage} alt="next"/>
        </div>
    )
}

export default Gallery