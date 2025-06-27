import React from 'react';
import ContentLoader from "react-content-loader";
import AppContext from '../../context';
import styles from './Card.module.scss';

function Card({ _id, title, image, price, loading = false }) {
    const {
        onAddToFavorite,
        onAddToCart,
        onRemoveItem,
        isItemAdded,
        isItemFavorite
    } = React.useContext(AppContext);

    const isAdded = isItemAdded(_id);
    const isAddFavorite = isItemFavorite(_id);

    const handlePlus = () => {
        if (isAdded) {
            onRemoveItem(_id);
        } else {
            onAddToCart({ _id, title, image, price });
        }
    };

    const onClickFavorite = () => {
        onAddToFavorite({ _id, title, image, price });
    };

    return (
        <div className={styles.productCard}>
            {loading ? (
                <ContentLoader
                    speed={2}
                    width={150}
                    height={220}
                    viewBox="0 0 150 265"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <rect x="0" y="0" rx="10" ry="10" width="150" height="150" />
                    <rect x="0" y="167" rx="5" ry="5" width="150" height="15" />
                    <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
                    <rect x="0" y="230" rx="5" ry="5" width="80" height="25" />
                    <rect x="118" y="230" rx="5" ry="5" width="32" height="32" />
                </ContentLoader>
            ) : (
                <>
                    <div className={styles.addToFavorite} onClick={onClickFavorite}>
                        <img src={isAddFavorite ? "/assets/images/like.svg" : "/assets/images/unlike.svg"} alt="like" />
                    </div>
                    <img className={styles.productImage} src={image} alt="product" />
                    <p>{title}</p>
                    <div className={styles.productInfo} >
                        <div className={styles.productPrice}>
                            <p>Цена:</p>
                            <b>{price}</b>
                        </div>
                        <img
                            className={styles.addProduct}
                            onClick={handlePlus}
                            src={isAdded ? "/assets/images/checked.svg" : "/assets/images/addProduct.png"}
                            alt="addProduct"
                        />
                    </div>
                </>
            )}
        </div>
    );
}

export default Card;