import { useState } from "react";
import '../../styles/Collapse.css';

function Collapse({ title, description }) {
        
        const [show, setShow] = useState(false);
        const [open, setOpen] = useState(false);
    
        function handleClick() {
            setShow(!show)
            setOpen(!open)
        }

    return (    
        <article className='collapse-article'>
            <div onClick={handleClick}>
                <h2>{title}</h2>
                { open ? <i className="fa-solid fa-angle-down icon-rotate-open"></i> : <i className="fa-solid fa-angle-down icon-rotate-close"></i> }
            </div>
            { Array.isArray(description) ? 
                description.map((list, index) => (
                    <li key={`${list}-${index}`} className={ show ? 'collapse-description' : 'hide-description' }>{list}</li>
                )) :
                    <p className={ show ? 'collapse-description' : 'hide-description' }>{description}</p> }
        </article>
    )
}

export default Collapse