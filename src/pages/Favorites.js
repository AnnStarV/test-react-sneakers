import React from "react";
import AppContext from "../context";
import Card from "../components/Card";
import { Link } from "react-router-dom";

function FavoritesPage() {
  const {
    favoriteItems,
    onAddToFavorite,
    onAddToCart,
    onRemoveItem,
    onRemoveFavItem,
    isItemAdded,
    isItemFavorite,
    isLoading
  } = React.useContext(AppContext);

  return (
    <div className="resourses">
      {favoriteItems.length === 0 ? (
        

        <div className="res-empty">
          <img className="res-emoji" src="/assets/images/empty-fav.png" alt="fav-emoji" />
          <h2>Закладок нет :(</h2>
          <p>вы ничего не добавляли в закладки</p>
          <Link to="/" className="backButtonLink"><button className='greenButton'><img className="backButton" src="/assets/images/arrow.svg" alt="back" />Вернуться назад</button></Link>
        </div>
      ) : (

        <div className="res-fulled">
          <div className="res-header">
            <Link to="/" className="backButtonLink"><button className='backFav'><img className="backButton" src="/assets/images/arrow.svg" alt="back" /></button></Link>
            <h2>Мои закладки</h2>
          </div>

          <div className="products">
            {favoriteItems.map((item) => (
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
            ))
            }
          </div>
        </div>
      )}
    </div>
  );
}

export default FavoritesPage;