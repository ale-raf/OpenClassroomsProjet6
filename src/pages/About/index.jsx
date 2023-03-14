import Header from '../../components/Header';
import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse';
import Footer from '../../components/Footer'
import '../../styles/About.css';

function About() {
    const aboutArticle = [
        {
            id:0, title:'Fiabilité', description:`Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, 
        et toutes les informations sont régulièrement vérifiées par nos équipes.`
        }, 
        {
            id:1, title:'Respect', description:`La bienveillance fait partie des valeurs fondatrices de Kasa. 
        Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.`
        }, 
        {
            id:2, title:'Service', description:`Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. 
        N'hésitez pas à nous contacter si vous avez la moindre question.`
        }, 
        {
            id:3, title:'Responsabilité', description:`La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, 
        chaque logement correspond  aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire,
        cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.`
        }
    ]

    return (
        <>
        <Header />
        <Banner />
        <main className='about-main'>
            {aboutArticle.map((article) => (
                <Collapse key={article.id} title={article.title} description={article.description}/>
            ))}
        </main>
        <Footer />
        </>
    )
}

export default About