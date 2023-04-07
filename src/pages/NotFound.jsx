import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const NotFound = () => {
    return(
        <motion.div
            initial={{ x: -1000, opacity: 0,}}
            animate={{ x: 0, opacity: 1, }}
        >
            <h1>Страницы не существует</h1>
            <h1>Перейдите лучше <Link to="/">домой</Link></h1>
        </motion.div>
    )
}


export {NotFound}