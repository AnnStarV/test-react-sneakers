function Header() {
    return (
        <header>
            <div className="logoWrapper">
                <img src="/assets/images/logo.png" alt="logo" />
                <div className="logoHeader">
                    <h2>REACT SNEAKERS</h2>
                    <p>Магазин лучших кроссовок</p>
                </div>
            </div>
            <div className="navigation">
                <ul>
                    <li>
                        <img src="/assets/images/bucket.png" alt="bucket" />
                        <p>1205 грн.</p>
                    </li>
                    <li>
                        <img src="/assets/images/favorites.png" alt="favorites" />
                    </li>
                    <li>
                        <img src="/assets/images/profile.png" alt="favorites" />
                    </li>
                </ul>
            </div>
        </header>
    )

}


export default Header;

