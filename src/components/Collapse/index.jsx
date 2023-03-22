import { useState } from "react";
import '../../styles/Collapse.css';

function Collapse({ title, description }) {
    const [show, setShow] = useState(false);

    function handleClick() {
        setShow(!show)
    }

    return (    
        <article className='collapse-article'>
            <div className="collapse-title" onClick={handleClick}>
                <h2>{title}</h2>
                { show ? <i className="fa-solid fa-angle-down icon-open"></i> : <i className="fa-solid fa-angle-down"></i> }
            </div>
            <div className={ show ? "collapse-display" : "collapse-hide" }>
            { Array.isArray(description) ?
                <ul>
                    {description.map((list, index) => (
                        <li key={`${list}-${index}`}>{list}</li>
                    ))}
                </ul>
                : 
                <p>{description}</p> }
            </div>
        </article>
    )
}

export default Collapse