import React from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context';

function Header(props) {

    const { total } = React.useContext(AppContext);

    return (
        <header>
            <div className="logoWrapper">
                <Link to="/">
                    <img width={40} height={40} src="/assets/images/logo.png" alt="logo" />
                </Link>
                <div className="logoHeader">
                    <h2>REACT SNEAKERS</h2>
                    <p>Магазин лучших кроссовок</p>
                </div>
            </div>
            <div className="navigation">
                <ul>
                    <li onClick={props.onClickCart}>
                        <img className="bucket" width={18} height={18} src="/assets/images/bucket.png" alt="bucket" />
                        <p>{total} грн.</p>
                    </li>

                    <li>
                        <Link to="/favorites">
                            <img className="favorites" src="/assets/images/favorites.png" alt="favorites" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/orders">
                            <img className="profile" src="/assets/images/profile.png" alt="profile" />
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )

}


export default Header;

