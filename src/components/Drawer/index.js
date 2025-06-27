import React from 'react';
import AppContext from '../../context';
import styles from './Drawer.module.scss';

function Drawer({ onClickCross }) {
    const { cartItems, onRemoveItem } = React.useContext(AppContext);

    return (
        <div className={styles.overlay}>
            <div className={styles.drawer}>
                <h2>Корзина <img className="delete" onClick={onClickCross} src={"/assets/images/delete.svg"} alt="delete" /></h2>
                {cartItems.length > 0 ? (
                    <>
                        <div className={styles.shoppingList}>
                            {cartItems.map((obj) => (
                                <div key={obj._id} className={styles.shopItem}>
                                    <img className={styles.shopImage} src={obj.image} alt="product" />
                                    <div className={styles.shopInfo}>
                                        <p>{obj.title}</p>
                                        <b>{obj.price} грн.</b>
                                    </div>
                                    <img onClick={() => onRemoveItem(obj._id)} className={styles.delete} src="/assets/images/delete.svg" alt="delete" />
                                </div>
                            ))}
                        </div>
                        <div className={styles.orderInfo}>

                            <div className={styles.sum}>
                                <p>Итого:</p>
                                <div className={styles.dush}></div>
                                <b>21 498 грн.</b>
                            </div>
                            <div className={styles.tax}>
                                <p>Налог 5%:</p>
                                <div className={styles.dush}></div>
                                <b>1074 грн.</b>
                            </div>
                            <button className='greenButton'>Оформить заказ <img src="/assets/images/arrow.svg" alt="arrow" /></button>
                        </div>
                    </>
                ) : (
                    <div className={styles.cartEmpty}>
                        <div className={styles.cartEmptyWrapper}>
                            <img src={"/assets/images/empty-card.png"} alt="empty-cart" />
                            <h2>Корзина пустая</h2>
                            <p>Добавьте хотя бы один товар, чтобы сделать заказ.</p>
                            <button onClick={onClickCross}>
                                <img src={"/assets/images/arrow.svg"} alt="arrow" />
                                Вернуться назад
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Drawer;