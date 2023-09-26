function Drawer() {
    return (
        <div style={{ display: 'none' }} className="overlay">
            <div className="drawer">
                <h2>Корзина <img className="delete" src={"/assets/images/delete.svg"} alt="delete" />
                </h2>
                <div className="shoppingList">
                    <div className="shopItem">
                        <img className="shopImage" src="/assets/images/product1.png" alt="product" />
                        <div className="shopInfo">
                            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                            <b>12 999 грн.</b>
                        </div>
                        <img className="delete" src="/assets/images/delete.svg" alt="delete" />
                    </div>

                </div>
                <div className="orderInfo">
                    <div className="sum">
                        <p>Итого:</p>
                        <div className='dush'></div>
                        <b>21 498 грн.</b>
                    </div>
                    <div className="tax">
                        <p>Налог 5%:</p>
                        <div className='dush'></div>
                        <b>1074 грн.</b>
                    </div>
                    <button className='greenButton'>Оформить заказ <img src="/assets/images/arrow.svg" alt="arrow" /></button>
                </div>
            </div>
        </div>

    )

}


export default Drawer;

