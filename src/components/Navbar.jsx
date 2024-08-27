import pizzaImg from '../img/pizzamia.png';
import React, { useState } from 'react';
import Loggin from '../components/Loggin';
import Register from '../components/Register';
import Cart from '../components/Cart';

const Navbar = () => {
    const [mostrarLoggin, setMostrarLoggin] = useState(false);
    const [mostrarRegistro, setMostrarRegistro] = useState(false);
    const [mostrarCarrito, setMostrarCarrito] = useState(false);
    
    
    const total = 0;
    const isLoggedIn = true;

   
    return (
        <nav className="navbar navbar-expand-lg navbar-dark text-white bg-green">
            <div className="container">
                <a className="navbar-brand ms-2" href="#"><img src={pizzaImg} alt="pizza" className="pizza" /></a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="container-fluid justify-content-start">
                        <div className="navbar-nav ms-auto ps-2">
                            <button className="btn btn-outline-light me-2" type="button">🏠 Home</button>
                            {isLoggedIn ? (
                                <>
                                    <button className="btn btn-outline-light me-2" type="button" onClick={() => setMostrarLoggin(true)}>🔐 Login</button>
                                    <button className="btn btn-outline-light me-2" type="button" onClick={() => setMostrarRegistro(true)}>🔐 Register</button>
                                </>
                            ) : (
                                <>
                                    <button className="btn btn-outline-light me-2" type="button">🔒 Profile</button>
                                    <button className="btn btn-outline-light me-2" type="button">🔒 Logout</button>
                                </>
                            )}
                        </div>
                    </form>
                    <div className="navbar-nav ms-auto ps-2">
                        <button className="btn btn-outline-primary me-2" type="button" onClick={setMostrarCarrito}>🛒 Carrito: $ {total.toLocaleString()}</button>
                    </div>
                </div>
            </div>
            {mostrarLoggin && <Loggin abierto={mostrarLoggin} CloseLog={() => setMostrarLoggin(false)} />}
            {mostrarRegistro && <Register openFormulario={mostrarRegistro} closeRegister={() => setMostrarRegistro(false)} />}  
            {mostrarCarrito && <Cart />}  
        </nav>
    );
};

export default Navbar;