import data from '../../data/data.json'

function Accomodation() {
    return (
        <main>
            <div>
                <img alt={data.description}/>
            </div>
            <h1>{data.title}</h1>
            <p></p>
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <h2>{data.host.name}</h2>
            <i></i>
            <section>
                <article>
                    <h3>Description</h3>
                </article>
                <article>
                    <h3>Équipements</h3>
                </article>
            </section>
        </main>
    )
}

export default Accomodation