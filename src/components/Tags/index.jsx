import '../../styles/Tags.css'

function Tags({ updateTags }) {
    return (
        <ul className='tags'>
            {updateTags.map(tags =>
                <li key={tags}>{tags}</li>)}
        </ul>
    )
}

export default Tags