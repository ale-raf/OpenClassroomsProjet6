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
                    <Link to="/" className={ path === '/' ? 'link link-active' : 'link' }>Accueil</Link>
                    <Link to="/about" className={ path === '/about' ? 'link link-active' : 'link' }>A propos</Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header