import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import '../../styles/Error.css'

function Error() {
    return (
        <>
        <main className="error-wrap">
            <h1 className="error-code">404</h1>
            <p className="error-description">Oups ! La page que vous demandez n'existe pas.</p>
            <Link to="/home" className="error-link">Retourner sur la page d'accueil</Link>
        </main>
        <Footer />
        </>
    )
}

export default Error