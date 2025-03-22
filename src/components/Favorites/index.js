import React from 'react'
import styles from './Favorites.module.scss';

function Favorites({onFavorite, isAddFavorite, onRemoveFavItem, onPlus, onRemoveItem, _id, title, image, price, isAdded}) {

    const [isFavorite, setIsFavorite] = React.useState(false);

    const handlePlus = ()=> {
        if (isAdded) {
            onRemoveItem(_id);
        } else {
            onPlus({ _id, title, image, price });
        }
    };

    const onClickFavorite = () => {
        if (isAddFavorite) {
            onRemoveFavItem(_id);
        } else {
            onFavorite({ _id, title, image, price });
        }
    }

    return (
        <div className={styles.productCard}>
            <div className={styles.addToFavorite}  onClick={onClickFavorite}>
                <img src={isAddFavorite? "/assets/images/like.svg" : "/assets/images/unlike.svg"} alt="like" />
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


export default Favorites;
