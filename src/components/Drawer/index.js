import styles from './Drawer.module.scss';

function Drawer(props) {
    return (
        <div className={styles.overlay}>
            <div className={styles.drawer}>
                <h2>Корзина <img className="delete" onClick={props.onClickCross} src={"/assets/images/delete.svg"} alt="delete" />
                </h2>
                <div  className={styles.shoppingList}>
                    <div className={styles.shopItem} >
                        <img  className={styles.shopImage} src="/assets/images/product1.png" alt="product" />
                        <div className={styles.shopInfo}>
                            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                            <b>12 999 грн.</b>
                        </div>
                        <img className={styles.delete}  src="/assets/images/delete.svg" alt="delete" />
                    </div>

                </div>
                <div className={styles.orderInfo}>
                    <div className={styles.sum}>
                        <p>Итого:</p>
                        <div className={styles.dush}></div>
                        <b>21 498 грн.</b>
                    </div>
                    <div  className={styles.tax}>
                        <p>Налог 5%:</p>
                        <div className={styles.dush}></div>
                        <b>1074 грн.</b>
                    </div>
                    <button className='greenButton'>Оформить заказ <img src="/assets/images/arrow.svg" alt="arrow" /></button>
                </div>
            </div>
        </div>

    )

}


export default Drawer;

