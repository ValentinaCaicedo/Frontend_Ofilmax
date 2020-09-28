import React from 'react';
import {Link} from 'react-router-dom';
import '../imagenes/Logo.png';

class Inicio extends React.Component {
    render() {
        return (
          
            <div className="container vh-100  mt-4">
            <div className="row container vh-100  mt-4">
              <div className="col"></div>
              <div className="col-6 container vh-100  mt-4 text-center">
              <img src="https://lh5.googleusercontent.com/QTPvw1qS5LFeztIZTXctavVMdY08vjkeztVfKHxMRRG0kmEFkMg3oqvKXzt6sqK_DwaLNassEQ=w1280" className="rounded" alt="" width= "170" height="160"/>
                <h5 className="text-center mt-4">Iniciar Sesión</h5>
                <br />
                <form >
                  <div className="form-group">
                    <label className="inputEmail">Correo Electronico</label>
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
                  <Link to="/" button className=" btn btn-orange btn btn-info btn-block" type="submit">
                    <strong>Iniciar Sesión</strong>
                  </Link>
                </form>
                <br />
                <h6>¿No tienes una cuenta? <a type = "link">Registrate</a></h6>
                <h6>Olvide mi Contraseña</h6>
                <br />
              </div>
              <div className="col"></div>
            </div>
          </div>
        );
      }
    }
      
export default Inicio;