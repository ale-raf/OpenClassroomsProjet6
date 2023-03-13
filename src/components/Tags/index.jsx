import '../../styles/Tags.css'

function Tags({ data, id, tags }) {
    return (
        <>
        {data.filter((list) => list.id === id)
            .map(list =>
                <ul key={list.id} className='tags'>
                    {list.tags.map(tags =>
                        <li key={tags}>{tags}</li>)}
                </ul>
        )}
        </>
    )
}

export default Tags