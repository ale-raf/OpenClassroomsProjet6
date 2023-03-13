import { Link } from 'react-router-dom'
import logo from '../../assets/logo-home.png'
import '../../styles/Header.css'

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Kasa" className='kasa-logo'/>
            <nav>
                <ul className='menu'>
                    <Link to="/" className='link'>Accueil</Link>
                    <Link to="/about" className='link'>A propos</Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header