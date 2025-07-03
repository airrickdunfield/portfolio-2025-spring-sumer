import { Link } from "react-router";

import "./Header.scss"

function Header() {

    return (
        <header className="header">
            <div className="container">
                <div className="flex space-between">
                    <div>logo</div>
                    <nav className="main-menu">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );

}

export default Header;