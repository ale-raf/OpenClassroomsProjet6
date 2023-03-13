import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../../styles/Banner.css'

function Banner() {
    let location = useLocation()
    let path = location.pathname
    const [update, setUpdate] = useState(true)

    useEffect(() => {
            if (path === '/about')
            setUpdate(!update)
    }, [])

    return (
        <div className={ update ? 'home-banner' : 'about-banner' }>
            { update ? <h1 className="home-title">Chez vous, partout et ailleurs</h1> : null }
        </div>
    )
}

export default Banner