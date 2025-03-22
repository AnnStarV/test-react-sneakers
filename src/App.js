import './index.scss';
import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Favorites from './components/Favorites';

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  const [favoriteItems, setFavItems] = React.useState([]);
  const [addedfavoriteItems, setAddedfavoriteItems] = React.useState({});
  const [products, setProducts] = React.useState([]);
  const [searchValue, setSearch] = React.useState('');
  const [addedItems, setAddedItems] = React.useState({});

  React.useEffect(() => {
    axios.get('http://localhost:5353/getProducts')
      .then(function (response) {
        setProducts(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    axios.get('http://localhost:5353/cart')
      .then(function (response) {
        setCartItems(response.data);
        const addedItemsMap = response.data.reduce((acc, item) => {
          acc[item._id] = true;
          return acc;
        }, {});
        setAddedItems(addedItemsMap);
      })
      .catch(function (error) {
        console.log(error);
      });

    axios.get('http://localhost:5353/favorites')
      .then(function (response) {
        setFavItems(response.data);
        const addedItemsMap = response.data.reduce((acc, item) => {
          acc[item._id] = true;
          return acc;
        }, {});
        setAddedfavoriteItems(addedItemsMap);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const onAddToCart = (obj) => {
    axios.post('http://localhost:5353/cart', obj)
      .then(function (response) {
        setCartItems((prev) => [...prev, response.data]);
        setAddedItems((prev) => ({ ...prev, [obj._id]: true }));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onAddToFavorite = (obj) => {
    axios.post('http://localhost:5353/favorites', obj)
      .then(function (response) {
        setFavItems((prev) => [...prev, response.data]);
        setAddedfavoriteItems((prev) => ({ ...prev, [obj._id]: true }));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onRemoveItem = (id) => {
    axios.delete(`http://localhost:5353/cart/${id}`)
      .then(() => {
        setCartItems((prev) => prev.filter(item => item._id !== id));
        setAddedItems((prev) => {
          const newAddedItems = { ...prev };
          delete newAddedItems[id];
          return newAddedItems;
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onRemoveItemFav = (id) => {
    axios.delete(`http://localhost:5353/favorites/${id}`)
      .then(() => {
        setFavItems((prev) => prev.filter(item => item._id !== id));
        setAddedfavoriteItems((prev) => {
          const newAddedItems = { ...prev };
          delete newAddedItems[id];
          return newAddedItems;
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onChangeSearchInput = (event) => {
    setSearch(event.target.value);
  };

  return (
    <Router>
      <div className="wrapper">
        {cartOpened && <Drawer items={cartItems} onRemove={(obj) => onRemoveItem(obj)} onClickCross={() => setCartOpened(false)} />}
        <Header onClickCart={() => setCartOpened(true)} />
        <hr />
        <Routes>
          <Route path="/" element={
            <div className="productPage">
              <div className="headerProducts">
                <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}</h1>
                <div className="searchComponent">
                  <img src="/assets/images/search.png" alt="search" />
                  <input onChange={onChangeSearchInput} value={searchValue} type="text" placeholder='Поиск...' />
                </div>
              </div>
              <div className="products">
                {products.map((el) => (
                  <Card
                    key={el._id}
                    _id={el._id}
                    title={el.title}
                    price={el.price}
                    image={el.image}
                    onFavorite={(obj) => onAddToFavorite(obj)}
                    onPlus={(obj) => onAddToCart(obj)}
                    onRemoveItem={(obj) => onRemoveItem(obj)}
                    onRemoveFavItem={(obj) => onRemoveItemFav(obj)}
                    isAddFavorite={!!addedfavoriteItems[el._id]}
                    isAdded={!!addedItems[el._id]}
                  />
                ))}
              </div>
            </div>
          } />
          <Route path="/favorites" element={
            <>
              <Link to="/" className="backButtonLink"><img className="backButton" src="/assets/images/arrow.svg" alt="back" />На главную</Link>
              <div className="products">
                {favoriteItems.map((el) => (
                  <Favorites
                    key={el._id}
                    _id={el._id}
                    title={el.title}
                    price={el.price}
                    image={el.image}
                    onFavorite={(obj) => onAddToFavorite(obj)}
                    onPlus={(obj) => onAddToCart(obj)}
                    onRemoveItem={(obj) => onRemoveItem(obj)}
                    onRemoveFavItem={(obj) => onRemoveItemFav(obj)}
                    isAddFavorite={!!addedfavoriteItems[el._id]}
                    isAdded={!!addedItems[el._id]}
                  />
                ))}
              </div>
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;