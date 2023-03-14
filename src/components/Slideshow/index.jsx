import { useState } from 'react';
import prev from '../../assets/previous.png';
import next from '../../assets/next.png';
import '../../styles/Slideshow.css'

function Slideshow({ updateSlider }) {
    const [count, setCount] = useState(1);
    const [index, setIndex] = useState(0);

    function previousImage() {
        setCount(count - 1)
        setIndex(index - 1)
        if (count === 1 && index === 0) {
            setCount(updateSlider.length)
            setIndex(updateSlider.length - 1)
        } 
    }

    function nextImage() {
        setCount(count + 1)
        setIndex(index + 1)
        if (count && index === updateSlider.length - 1) {
            setCount(1)
            setIndex(0)
        }
    }

    return (
        <section className='slider'>
            <div className="slideshow" style={{ backgroundImage: `url(${updateSlider[index]})` }}>
                { updateSlider.length > 1 && 
                    <>
                        <img src={prev} onClick={previousImage} className="left-chevron" alt="previous"/>
                        <p>{count}/{updateSlider.length}</p>
                        <img src={next} onClick={nextImage} className="right-chevron" alt="next"/>
                    </>
                }
            </div>                
        </section>
    )
}

export default Slideshow