import React from 'react';
import AppContext from '../context.js';
import Info from './Info.js';
import axios from 'axios';

function Drawer({ onClickCross }) {
    const { setOrders, cartItems, onRemoveItem, setCartItems, total, tax } = React.useContext(AppContext);

    const [isOrderComplete, setIsOrderComplete] = React.useState(false);
    const [orderId, setOrderId] = React.useState(null);

    const onCompleteOrder = async () => {
        try {
            const { data } = await axios.post('http://localhost:5353/orders', { items: cartItems, total, tax });
            setOrderId(data.orderNumber); // сохраняем id заказа из MongoDB
            setIsOrderComplete(true);
            setCartItems([]);
            await axios.delete('http://localhost:5353/cart');
            const res = await axios.get('http://localhost:5353/orders');
            setOrders(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="overlay">
            <div className="drawer">
                <h2>Корзина <img className="delete" onClick={onClickCross} src={"/assets/images/delete.svg"} alt="delete" /></h2>
                {cartItems.length > 0 ? (
                    <>
                        <div className="shoppingList">
                            {cartItems.map((obj) => (
                                <div key={obj._id} className="shopItem">
                                    <img className="shopImage" src={obj.image} alt="product" />
                                    <div className="shopInfo">
                                        <p>{obj.title}</p>
                                        <b>{obj.price} грн.</b>
                                    </div>
                                    <img onClick={() => onRemoveItem(obj._id)} className="delete" src="/assets/images/delete.svg" alt="delete" />
                                </div>
                            ))}
                        </div>
                        <div className="orderInfo">

                            <div className="sum">
                                <p>Итого:</p>
                                <div className="dush"></div>
                                <b>{total} грн.</b>
                            </div>
                            <div className="tax">
                                <p>Налог 2%:</p>
                                <div className="dush"></div>
                                <b>{tax} грн.</b>
                            </div>
                            <button className='greenButton' onClick={onCompleteOrder}>Оформить заказ <img src="/assets/images/arrow.svg" alt="arrow" /></button>
                        </div>
                    </>
                ) : (
                    <Info
                        title={isOrderComplete ? "Заказ оформлен" : "Корзина пустая"}
                        description={isOrderComplete ? `Ваш заказ #${orderId ? orderId : ""} скоро будет передан курьерской доставке` : "Добавьте хотя бы один товар, чтобы сделать заказ."}
                        image={isOrderComplete ? "/assets/images/completed-order.png" : "/assets/images/empty-card.png"}
                        buttonText="Вернуться назад"
                    />
                )}
            </div>
        </div>
    );
}

export default Drawer;