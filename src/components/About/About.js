import { useState } from 'react';
import '../../styles/About.css';
import Collapse from '../Collapse/Collapse';

const aboutArticle = [
    {
        id:0, title:'Fiabilité'
    },
    {
        id:1, title:'Respect'
    },
    {
        id:2, title:'Service'
    },
    {
        id:3, title:'Responsabilité'
    }
] 

function About() {

    const [show, setShow] = useState(false);
    const [open, setOpen] = useState(false);

    function handleClick() {
        setShow(!show);
        setOpen(!open)
    }

    return (
        <main className='about-main'>
            <div className="about-banner"></div>
            {aboutArticle.map((article) => (
                <article className="about-article">
                    <div id={article.id} onClick={handleClick}>
                        <h2>{article.title}</h2>
                        { open ? <i className="fa-solid fa-angle-down icon-rotate"></i> : <i className="fa-solid fa-angle-down"></i> }
                    </div>
                    { show ? <Collapse /> : null }
                </article>
            ))}
        </main>
    )
}

export default About