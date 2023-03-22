// import { useLocation } from 'react-router-dom';
import '../../styles/Banner.css'

function Banner({ banner, bannerTitle }) {
    return (
        <div className={ banner }>
            <h1 className={ bannerTitle }>Chez vous, partout et ailleurs</h1>
        </div>
    )
}

export default Banner