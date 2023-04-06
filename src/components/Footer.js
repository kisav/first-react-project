import React from "react";
import { motion } from "framer-motion";

class Footer extends React.Component {
    render() {
        return(
            <motion.footer
                initial={{ y: 1000, }}
                animate={{ y: 0 }}
            >Создано в развлекательных целях!!!</motion.footer>
        );
    }
}

export default Footer