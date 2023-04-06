import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import './css/index.css';
import { Route, Link, Routes } from 'react-router-dom';
import { About } from "./pages/About";
import { notFound } from "./pages/notFound";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}
   
export default App;