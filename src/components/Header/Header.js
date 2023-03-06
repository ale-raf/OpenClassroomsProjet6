import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/LOGO.svg'
import '../../styles/Header.css'

function Header() {
    return <header>
        <div className="header">
            <img src={logo} alt="Kasa" className='kasa-logo'/>
            <nav>
                <ul className='menu'>
                    <Link to="/" className='link'>Accueil</Link>
                    <Link to="/about" className='link'>A propos</Link>
                </ul>
            </nav>
        </div>
    </header>
}

export default Header