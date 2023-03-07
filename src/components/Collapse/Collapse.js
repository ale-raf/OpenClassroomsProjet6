import { useState } from "react";
import '../../styles/Collapse.css';

function Collapse(props) {
    
        const [show, setShow] = useState(false);
        const [open, setOpen] = useState(false);
    
        function handleClick() {
            setShow(!show);
            setOpen(!open)
        }

    return (    
        <article className="collapse-article">
            <div onClick={handleClick}>
                <h2>{props.data}</h2>
                { open ? <i className="fa-solid fa-angle-down icon-rotate"></i> : <i className="fa-solid fa-angle-down"></i> }
            </div>
            { show ? <p className='collapse-description'>{props.value}</p> : null }
        </article>
    )
}

export default Collapse