import React from "react";
import { Link } from "react-router-dom";
// import "./header.css";

const Header = () => {
    return (
        <header class="text-center p-4 border-b border-gray-200">
            <nav>
                <ul class="list-none p-0 inline-flex items-center">
                    <li class="mr-4">
                        <Link
                            to="/home"
                            class="text-xl font-medium text-gray-900 hover:text-blue-500"
                        >
                            Accueil
                        </Link>
                    </li>
                    <li class="mr-4">
                        <Link
                            to="/service"
                            class="text-xl font-medium text-gray-900 hover:text-blue-500"
                        >
                            Service
                        </Link>
                    </li>
                    <li class="mr-4">
                        <Link
                            to="/contact"
                            class="text-xl font-medium text-gray-900 hover:text-blue-500"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
