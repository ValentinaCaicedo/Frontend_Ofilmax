import React from 'react';
import Navbar from '../componentes/Navbar'
import Header from '../componentes/Header'
import Cards from '../componentes/Cards'

class PaginaInicial extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <br></br>
        <br></br>
        <Header />
        <br></br>
        <Cards />
      </div>
    );
  }
}
export default PaginaInicial;

