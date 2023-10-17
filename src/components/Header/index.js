import styles from './Header.module.scss';

function Header() {
    return (
        <header>
            <div className={styles.logoWrapper}>
                <img width ={40} height={40} src="/assets/images/logo.png" alt="logo" />
                <div className={styles.logoHeader}>
                    <h2>REACT SNEAKERS</h2>
                    <p>Магазин лучших кроссовок</p>
                </div>
            </div>
            <div className={styles.navigation}>
                <ul>
                    <li>
                        <img width={18} height={18} src="/assets/images/bucket.png" alt="bucket" />
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

