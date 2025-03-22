import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <header>
            <div className={styles.logoWrapper}>
                <Link to="/">
                    <img width ={40} height={40} src="/assets/images/logo.png" alt="logo" />
                </Link>
                <div className={styles.logoHeader}>
                    <h2>REACT SNEAKERS</h2>
                    <p>Магазин лучших кроссовок</p>
                </div>
            </div>
            <div className={styles.navigation}>
                <ul>
                    <li onClick={props.onClickCart}>
                        <img className={styles.bucket} width={18} height={18} src="/assets/images/bucket.png" alt="bucket" />
                        <p>1205 грн.</p>
                    </li>
                    
                    <li>
                        <Link to="/favorites">
                            <img className={styles.favorites} src="/assets/images/favorites.png" alt="favorites" />
                        </Link>
                    </li>
                    <li>
                        <img className={styles.profile} src="/assets/images/profile.png" alt="profile" />
                    </li>
                </ul>
            </div>
        </header>
    )

}


export default Header;

