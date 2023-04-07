import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <motion.header className="header"
                initial={{ opacity: 0, scale: 0.2, }}
                animate={{ opacity: 1, scale: 1, }}
                transition={{ duration: 0.2, }}
            ><h2><b>Шапка</b></h2><br></br>
            <Link
                // whileHover={{ color: "#FFFF00", backgroundColor: "#808000" }}
                to="/about"
            >Про сайт</Link>
            <Link
                // whileHover={{ color: "#FFFF00",  backgroundColor: "#808000" }}
                to="/"
            >На домашнюю</Link>
            <Link
                // whileHover={{ color: "#FFFF00",  backgroundColor: "#808000" }}
                to="/why"
            >Не нажимай сюда</Link>
            </motion.header>
        );
    }
}

export default Header;