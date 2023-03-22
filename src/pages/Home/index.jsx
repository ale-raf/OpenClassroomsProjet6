import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Gallery from '../../components/Gallery';
import Footer from '../../components/Footer';

function Home() {
    return (
        <>
            <Header />
            <Banner banner='home-banner' bannerTitle='home-title' />
            <Gallery />
            <Footer />
        </>
    )
}

export default Home