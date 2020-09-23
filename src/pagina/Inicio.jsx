import React from 'react';
import Navbar from '../componentes/Navbar';

class Inicio extends React.Component {
    render() {
        return (
          
            <div className="container vh-100  mt-4">
                  <Navbar/>
            <div className="row">
              <div className="col"></div>
    
              <div className="col-6 border">
                <h5 className="text-center mt-4">Iniciar Sesión</h5>
                <br />
                <form >
                  <div className="form-group">
                    <label className="inputEmail">Usuario</label>
                    <input
                  
                      type="email"
                      name="email"
                      id="inputEmail"
                      className="form-control"
                  
                      required
                    />
                  </div>
    
                  <div className="form-group">
                    <label>Contraseña</label>
                    <input
                 
                      type="password"
                      name="contrasena"
                      id="inputPassword"
                      className="form-control"
              
                      required
                    />
                  </div>
    
                  <button className=" btn btn-orange btn-block" type="submit">
                    <strong>Iniciar Sesión</strong>
                  </button>
                </form>
                <br />
                <h6>¿Primera vez en EduSkill?</h6>
    
                
    
                <br />
              </div>
    
              <div className="col"></div>
            </div>
          </div>
        );
      }
    }
      
export default Inicio;