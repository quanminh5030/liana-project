import { Divider } from '@material-ui/core';
import React from 'react';
import BodyPoster from './components/BodyPoster';
import Footer from './components/Footer';
import Header from './components/Header';
import NavBar from './components/NavBar';
import About from './components/About';
import Statistics from './components/Statistics';
import News from './components/News';
import References from './components/References';
import Subscribe from './components/Subscribe';

export default function App() {

  return (
    <>
      <Header />
      <NavBar />
      <BodyPoster />
      <About />
      <Statistics />
      <News />
      <References />
      <Divider style={{ backgroundColor: '#cccccc' }} />
      <Subscribe />
      <Footer />
    </>
  )
}