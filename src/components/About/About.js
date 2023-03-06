import '../../styles/About.css';

const aboutArticle = [
    {
        id:0, title:'Fiabilité', description:'Eu veniam veniam ipsum eu sunt Lorem. Et ea elit officia incididunt laboris id. Proident cupidatat mollit aliqua non est duis aliqua aliquip est consequat officia ea. Occaecat nulla esse enim occaecat mollit quis excepteur fugiat elit laboris esse. Aute adipisicing ex duis nostrud eiusmod nulla velit non.'
    },
    {
        id:1, title:'Respect', description:'Proident cupidatat mollit aliqua non est duis aliqua aliquip est consequat officia ea. Occaecat nulla esse enim occaecat mollit quis excepteur fugiat elit laboris esse. Aute adipisicing ex duis nostrud eiusmod nulla velit non.'
    },
    {
        id:2, title:'Service', description:'Et ea elit officia incididunt laboris id. Proident cupidatat mollit aliqua non est duis aliqua aliquip est consequat officia ea. Occaecat nulla esse enim occaecat mollit quis excepteur fugiat elit laboris esse. Aute adipisicing ex duis nostrud eiusmod nulla velit non.'
    },
    {
        id:3, title:'Responsabilité', description:'Occaecat nulla esse enim occaecat mollit quis excepteur fugiat elit laboris esse. Aute adipisicing ex duis nostrud eiusmod nulla velit non.'
    }
] 

function About() {
    function handleClick() {
        let target = document.querySelector('.about-article p')
        console.log(target)
        if (target.getAttribute('class') === null) {
            target.setAttribute('class', 'about-description');
            target.removeAttribute('style');
            document.querySelector('.about-article i').classList.add('icon-rotate');
        } else {
            target.removeAttribute('class', 'about-description');
            target.setAttribute('style', 'display:none');
            document.querySelector('.about-article i').classList.remove('icon-rotate');
        }
    }
    return (
        <main>
            <div className="about-banner"></div>
            {aboutArticle.map((article) => (
                <article id={article.id} className="about-article">
                    <div onClick={() => handleClick()}>
                        <h2>{article.title}</h2>
                        <i className="fa-solid fa-angle-down"></i>
                    </div>
                    <p style={{display: 'none'}}>{article.description}</p>
                </article>
            ))}
        </main>
    )
}

export default About