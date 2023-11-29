function Header() {
    return (
        <header>
            <div className="logo">
                <img src="../img/Logo.png" width="85px" alt="" />
            </div>

            <div className="header-items">
                <ul>
                    <li>
                        <a href="#bio">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#article">Articles</a>
                    </li>
                    <li>
                        <a href="#project">Projects</a>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
