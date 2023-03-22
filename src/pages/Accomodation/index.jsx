import { useParams } from "react-router-dom"
import datas from '../../datas/data.json'
import CurrentAccomodation from "../CurrentAccomodation"
import Error from "../Error"

function Accomodation() {
    const { id } = useParams()
    var accomodation

    datas.map(data => {
        if (data.id === id) accomodation = data
        return null
    })

    if (accomodation === undefined) return <Error />
    return <CurrentAccomodation />
}

export default Accomodation