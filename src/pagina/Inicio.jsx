import React from 'react';
import { Link } from 'react-router-dom'

class Inicio extends React.Component {
    render() {
        return (
            <div>
                <div className="dropdown-menu">
                    <form className="px-4 py-3">
                        <div className="form-group">
                            <label for="exampleDropdownFormEmail1">Email address</label>
                            <div type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com" />
                        </div>
                        <div className="form-group">
                            <label for="exampleDropdownFormPassword1">Password</label>
                            <div type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <div className="form-check">
                                <div type="checkbox" class="form-check-input" id="dropdownCheck" />
                                <label className="form-check-label" for="dropdownCheck">
                                    Remember me </label>
                            </div>
                        </div>
                        <Link to= "/" button type="submit" className="btn btn-primary">Iniciar</Link>
                    </form>
                    <div class="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">New around here? Sign up</a>
                    <a className="dropdown-item" href="#">Forgot password?</a>
                </div>
            </div >
        );
    }
}

export default Inicio;