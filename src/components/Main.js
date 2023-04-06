import React from "react";
import Image from "./Image";
import Pic1 from './img/Pic1.jpg'
import { motion } from "framer-motion";

class Main extends React.Component {
    render() {
        return(
            <motion.main
                initial={{ opacity: 0, scale: 0.2, x: -1000, backgroundColor: 'rgb(220, 205, 205)' }}
                animate={{ opacity: 1, scale: 1, x: 0, backgroundColor: '#fff' }}
            >
                <h1>Меня зовут Владислав</h1>
                <Image image={Pic1}/>
                <p>Я Влад и я разрабатываю свою первую страницу на css и html<br></br>
                пока-что тут ничего нету но скоро тут появится функционал</p>
                <ul><br></br><br></br><br></br>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                </ul> 
            </motion.main>
        );
    }
}

export default Main;