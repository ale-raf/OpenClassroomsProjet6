import { useState } from 'react';
import prev from '../../assets/previous.png';
import next from '../../assets/next.png';
import '../../styles/Slideshow.css'

function Slideshow({ data, id }) {
    const [count, setCount] = useState(1);
    const [index, setIndex] = useState(0);
    // const [hide, setHide] = useState(false)

    function previousImage() {
        setCount(count - 1)
        setIndex(index - 1)
        if (count === 1 && index === 0) {
            setCount(data.pictures.length)
            setIndex(data.pictures.length - 1)
        } 
    }

    function nextImage() {
        setCount(count + 1)
        setIndex(index + 1)
        if (count && index === data.pictures.length - 1) {
            setCount(1)
            setIndex(0)
        }
    }

    return (
        <>
            {data.filter((gallery) => gallery.id === id)
                .map((gallery, key) => (
                    <div key={key} className='slider'>
                        <div className="slideshow" style={{ backgroundImage: `url(${gallery.pictures[index]})` }}>
                            { gallery.pictures.length > 1 && 
                                <>
                                    <img src={prev} onClick={previousImage} className="left-chevron" alt="previous"/>
                                    <p>{count}/{gallery.pictures.length}</p>
                                    <img src={next} onClick={nextImage} className="right-chevron" alt="next"/>
                                </>
                            }
                        </div>                
                    </div>
            ))}
        </>
    )
}

export default Slideshow