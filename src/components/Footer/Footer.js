import React from 'react'
import logo from '../../assets/LOGO-footer.png'
import '../../styles/Footer.css'

function Footer() {
    return <footer className='footer'>
        <img src={logo} alt="Kasa" className='kasa-footer-logo'/>
        <p>© 2020 Kasa. All rights reserved</p>
    </footer>
}

export default Footer