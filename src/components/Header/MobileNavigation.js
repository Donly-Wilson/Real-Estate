import React, { Component } from "react";
import { Link } from 'react-router-dom'

export default class mobileNavigation extends Component {
    constructor() {
        super();
        this.state = {
            openMenu: false
        };
    }
    
    // This function toggles menu when it is triggered
    toggleMenu = () =>{
        this.setState((prevState)=>{
            return {openMenu: !prevState.openMenu};
        })
    }

    render(){
        console.log(this.state)
        return (
            <section className="mobileNav">
                <div className="mobileNav__hamburger-menu" onClick={() => this.toggleMenu()}>
                    <i className="fa fa-bars" aria-hidden="true"></i>
                </div>
                <Link to="/">
                <div className="logo">
                    <img className="logo__icon" src="../../img/address.svg"></img>
                    Más Casas
                </div>
                </Link>
                <nav>
                <Link to="/homes" className="homes">
                    Homes
                </Link>
                </nav>
                {/* the below will be displayed if "openMenu" and div is true(div is always true) */}
                {this.state.openMenu && <div className="mobileNav__menu">
                    <div className="mobileNav__hamburger-menu" onClick={() => this.toggleMenu()}>
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </div>
                    <div className="logo">
                        <Link to="/">
                            <img className="logo__icon" src="../../img/address.svg"></img>
                            Más Casas
                        </Link>
                    </div>
                    <ul className="mobileNav__menu__nav">
                        <li><Link to="/createads">
                        Create Ads
                        </Link></li>
                        <li><Link to="/aboutus">
                        About us
                        </Link></li>
                        <li><Link to="/homes" className="homes">Homes</Link></li>
                        <li><a href="#" className="register-btn">
                        Register
                        </a></li>
                    </ul>
                </div>}
            </section>
        )
    }
}
