import '../../styles/Tags.css'

function Tags({ tags }) {
    return (
        <ul className='tags'>
            {tags.map(tag =>
                <li key={tag}>{tag}</li>)}
        </ul>
    )
}

export default Tags