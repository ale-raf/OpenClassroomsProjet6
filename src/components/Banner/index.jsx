import { useLocation } from 'react-router-dom';
import '../../styles/Banner.css'

function Banner() {
    let location = useLocation()
    let path = location.pathname

    return (
        <div className={ path === '/' ? 'home-banner' : 'about-banner' }>
            { path === '/' ? <h1 className="home-title">Chez vous, partout et ailleurs</h1> : null }
        </div>
    )
}

export default Banner