import React from "react";
import AppContext from "../context";
import Card from "../components/Card";

function Home() {
  const {
    products,
    isLoading,
    searchValue,
    onChangeSearchInput,
    onAddToCart,
    onAddToFavorite,
    onRemoveItem,
    onRemoveFavItem,
    isItemAdded,
    isItemFavorite
  } = React.useContext(AppContext);


  return (
    <div className="productPage">
      <div className="headerProducts">
        <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}</h1>
        <div className="searchComponent">
          <img src="/assets/images/search.png" alt="search" />
          <input onChange={onChangeSearchInput} value={searchValue} type="text" placeholder='Поиск...' />
        </div>
      </div>
      <div className="products">
        {isLoading
          ? [...Array(12)].map((_, i) => <Card key={i} loading={true} />)
          : products
          .filter(item =>
          item.title?.toLowerCase().includes(searchValue.toLowerCase())
        )
          .map((item) => (
              <Card
                key={item._id}
                {...item}
                onFavorite={onAddToFavorite}
                onPlus={onAddToCart}
                onRemoveItem={onRemoveItem}
                onRemoveFavItem={onRemoveFavItem}
                isAdded={isItemAdded(item._id)}
                isAddFavorite={isItemFavorite(item._id)}
                loading={false}
              />
            ))}
      </div>
    </div>
  );
}

export default Home;