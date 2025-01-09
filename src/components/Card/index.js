import React from 'react'
import styles from './Card.module.scss';

function Card({onFavorite, onPlus, onRemoveItem, _id, title, image, price, isAdded}) {

    const handlePlus = ()=> {
        if (isAdded) {
            onRemoveItem(_id);
        } else {
            onPlus({ _id, title, image, price });
        }
    };

    return (
        <div className={styles.productCard}>
            <div className={styles.addToFavorite}  onClick={onFavorite}>
                <img src="/assets/images/unLike.svg" alt="like" />
            </div>
            <img className={styles.productImage}  src={image} alt="product" />
            <p>{title}</p>
            <div className={styles.productInfo} >
                <div className={styles.productPrice}>
                    <p>Цена:</p>
                    <b>{price}</b>
                </div>
         
                <img className={styles.addProduct} onClick={handlePlus} src={isAdded? "/assets/images/checked.svg" : "/assets/images/addProduct.png"} alt="addProduct" />

            </div>
        </div>
    )
}


export default Card;
