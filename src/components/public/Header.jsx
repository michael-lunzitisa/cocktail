import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/home">Accueil</Link>
                        </li>
                        <li>
                            <Link to="/service">Service</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;
