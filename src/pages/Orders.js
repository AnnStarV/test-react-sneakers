import React from "react";
import AppContext from "../context";
import Card from "../components/Card";
import { Link } from "react-router-dom";

function OrdersPage() {
 const { orders, onAddToFavorite, onAddToCart, onRemoveItem, onRemoveFavItem, isItemFavorite, isItemAdded, isLoading  } = React.useContext(AppContext);

  return (
    <div className="resourses orders">
      {console.log(orders)}
      {orders.length === 0 ? (
        

        <div className="res-empty">
          <img className="res-emoji" src="/assets/images/orders.png" alt="orders-emoji" />
          <h2>У вас нет заказов</h2>
          <p>Вы нищеброд??<br />Оформите хотя бы один заказ.</p>
          <Link to="/" className="backButtonLink"><button className='greenButton'><img className="backButton" src="/assets/images/arrow.svg" alt="back" />Вернуться назад</button></Link>
        </div>
      ) : (

        <div className="res-fulled">
          <div className="res-header">
            <Link to="/" className="backButtonLink"><button className='backFav'><img className="backButton" src="/assets/images/arrow.svg" alt="back" /></button></Link>
            <h2>Мои покупки</h2>
          </div>

          <div className="products">
             {orders.map(order => (
              <>
              <h3>Заказ #{order.orderNumber} на сумму: {order.total}</h3>
                <div key={order._id} className="orderCard">
                
                    {order.items.map((item, idx) => (
                    <Card
                        key={item._id}
                        {...item}
                        onFavorite={onAddToFavorite}
                        onPlus={onAddToCart}
                        onRemoveItem={onRemoveItem}
                        onRemoveFavItem={onRemoveFavItem}
                        isAddFavorite={isItemFavorite(item._id)}
                        isAdded={isItemAdded(item._id)}
                        loading={isLoading}
                    />
                    ))}

                </div>
                </>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default OrdersPage;