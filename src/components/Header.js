import React from "react";
import { motion } from "framer-motion";

class Header extends React.Component {
    render() {
        return (
            <motion.header className="header"
                initial={{ opacity: 0, scale: 0.2, }}
                animate={{ opacity: 1, scale: 1, }}
                transition={{ duration: 0.2, }}
            ><h2><b>Шапка</b></h2><br></br>
            <motion.a
                whileHover={{ color: "#FFFF00", backgroundColor: "#808000" }}
            >Ссылка</motion.a>
            <motion.a
                whileHover={{ color: "#FFFF00",  backgroundColor: "#808000" }}
            >Ссылка</motion.a>
            <motion.a
                whileHover={{ color: "#FFFF00",  backgroundColor: "#808000" }}
            >Ссылка</motion.a>
            </motion.header>
        );
    }
}

export default Header;