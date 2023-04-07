import rickroll from '../components/img/rickroll.jpg';
import RickImage from '../components/RickImage';
import { Link } from "react-router-dom"

const Bye = () => {
    return(
        <div>
            <h1>You've been rickrolled</h1>
            <RickImage image={rickroll} />
            <h1>Вернуться <Link to="/">домой</Link></h1>
        </div>
    )
}

export {Bye}