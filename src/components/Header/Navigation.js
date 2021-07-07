import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
    return (
            <section className="navigation">
            <Link to="/">
                <div className="logo">
                    <img className="logo__icon" src="../../img/address.svg"></img>
                    Más Casas
                </div>
            </Link>
            <nav>
                <Link to="/homes" className="homes">Homes</Link>
                <Link to="#" className="createads">
                Create Ads
                </Link>
                <Link to="#" className="aboutus">
                About us
                </Link>
                <a href="#" className="register-btn">
                Register
                </a>
            </nav>
            </section>
    )
}
