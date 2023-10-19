import React from 'react'
import styles from './Card.module.scss';

function Card(props) {

    const [isAdded, setIsAdded] = React.useState(false);

    const handlePlus = ()=> {
        setIsAdded(!isAdded);
    };

    

    return (
        <div className={styles.productCard}>
            <div className={styles.addToFavorite}  onClick={props.onFavorite}>
                <img src="/assets/images/unLike.svg" alt="like" />
            </div>
            <img className={styles.productImage}  src={props.image} alt="product" />
            <p>{props.name}</p>
            <div className={styles.productInfo} >
                <div className={styles.productPrice}>
                    <p>Цена:</p>
                    <b>{props.price}</b>
                </div>
         
                <img className={styles.addProduct} onClick={handlePlus} src={isAdded? "/assets/images/checked.svg" : "/assets/images/addProduct.png"} alt="addProduct" />

            </div>
        </div>
    )
}


export default Card;
