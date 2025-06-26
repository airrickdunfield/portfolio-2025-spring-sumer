import "./Header.scss"

function Header() {

    return (
        <header className="header">
            <div className="container">
                <div className="flex space-between">
                    <div>logo</div>
                    <nav class="main-menu">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Projects</a></li>
                            <li><a href="#">About</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );

}

export default Header;