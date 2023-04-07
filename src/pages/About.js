import { motion } from "framer-motion"

const About = () => {
    return(
        <motion.main
            initial={{ x: -1000, opacity: 0,}}
            animate={{ x: 0, opacity: 1, }}
        >
            <h1>Этот веб сайт сделать полностью в развлекательных целях</h1>
            <h1>В частности ради теста разных функций из html css и javascript</h1>
            <h1>Скорее всего скоро появится другой сайт</h1>
        </motion.main>
    )
}

export {About}