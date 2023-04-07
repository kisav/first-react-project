import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import './css/index.css';
import { Route, Routes } from 'react-router-dom';
import { About } from "./pages/About";
import { NotFound } from "./pages/NotFound";
import { Rickroll } from "./pages/rickroll";
import { Bye } from "./pages/Bye";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />}/>
          <Route path="/why" element={<Rickroll />} />
          <Route path="/bye" element={<Bye />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}
   
export default App;
