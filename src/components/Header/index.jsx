import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/logo-home.png'
import '../../styles/Header.css'

function Header() {
    let location = useLocation()
    let path = location.pathname

    return (
        <header className="header">
            <Link to="/">
                <img src={logo} alt="Kasa" className='kasa-logo'/>
            </Link>
            <nav>
                <ul className='menu'>
                    <Link to='/OpenClassroomsProjet6/' className={ path === '/OpenClassroomsProjet6/' ? 'link link-active' : 'link' }>Accueil</Link>
                    <Link to='/OpenClassroomsProjet6/about' className={ path === '/OpenClassroomsProjet6/about' ? 'link link-active' : 'link' }>A propos</Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header