import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const Rickroll = () => {
    return(
        <motion.div
            initial={{ x: -1000, opacity: 0,}}
            animate={{ x: 0, opacity: 1, }}
        >
            <p className="betterP">Лучше бы ты не нажимал...<br></br>
                <Link to="/bye" className="betterLink">Не нажимай на меня</Link>
            </p>
        </motion.div>
    )
}


export {Rickroll}