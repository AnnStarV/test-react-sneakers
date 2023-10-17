import styles from './Card.module.scss';

function Card(props) {

const onClickButton = () => {
    alert(props.name);
}

    return (
        <div className={styles.productCard}>
            <div className={styles.addToFavorite}>
                <img src="/assets/images/unLike.svg" alt="like" />
            </div>
            <img className={styles.productImage}  src={props.image} alt="product" />
            <p>{props.name}</p>
            <div className={styles.productInfo} >
                <div className={styles.productPrice}>
                    <p>Цена:</p>
                    <b>{props.price}</b>
                </div>
                <button className={styles.addProduct}  onClick={onClickButton}>
                    <img src="/assets/images/addProduct.png" alt="addProduct" />
                </button>
            </div>
        </div>
    )
}


export default Card;
