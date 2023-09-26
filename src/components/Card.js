function Card(props) {
    return (
        <div className="productCard">
            <div className="addToFavorite">
                <img src="/assets/images/unLike.svg" alt="like" />
            </div>
            <img className="productImage" src={props.image} alt="product" />
            <p>{props.name}</p>
            <div className="productInfo">
                <div className="productPrice">
                    <p>Цена:</p>
                    <b>{props.price}</b>
                </div>
                <button className="addProduct">
                    <img src="/assets/images/addProduct.png" alt="addProduct" />
                </button>
            </div>
        </div>
    )
}


export default Card;
