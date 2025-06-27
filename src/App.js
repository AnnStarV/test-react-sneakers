import './index.scss';
import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Drawer from './components/Drawer';
import AppContext from './context';

import Home from './pages/Home';
import FavoritesPage from './pages/Favorites';

function App() {
  const [products, setProducts] = React.useState(Array(12).fill({}));
  const [cartItems, setCartItems] = React.useState([]);
  const [favoriteItems, setFavItems] = React.useState([]);
  const [searchValue, setSearch] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  const [addedItems, setAddedItems] = React.useState({});
  const [addedfavoriteItems, setAddedfavoriteItems] = React.useState({});

  React.useEffect(() => {
    setAddedItems(
      cartItems.reduce((acc, item) => {
        acc[item._id] = true;
        return acc;
      }, {})
    );
  }, [cartItems]);

  // Синхронизация addedfavoriteItems при изменении favoriteItems
  React.useEffect(() => {
    setAddedfavoriteItems(
      favoriteItems.reduce((acc, item) => {
        acc[item._id] = true;
        return acc;
      }, {})
    );
  }, [favoriteItems]);

  React.useEffect(() => {
    setIsLoading(true);

    Promise.all([
      axios.get('http://localhost:5353/getProducts'),
      axios.get('http://localhost:5353/cart'),
      axios.get('http://localhost:5353/favorites')
    ])
      .then(async ([productsRes, cartRes, favRes]) => {
        // Искусственная задержка для продуктов
        await new Promise((resolve) => {
          setTimeout(() => {
            setProducts(productsRes.data);
            resolve();
          }, 1000);
        });

        setCartItems(cartRes.data);
        setFavItems(favRes.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const onAddToCart = (obj) => {
    const isAdded = cartItems.some(item => item._id === obj._id);
    if (isAdded) {
      axios.delete(`http://localhost:5353/cart/${obj._id}`)
        .then(() => {
          setCartItems((prev) => prev.filter(item => item._id !== obj._id));
        })
        .catch(console.log);
    } else {
      axios.post('http://localhost:5353/cart', obj)
        .then((response) => {
          setCartItems((prev) => [...prev, response.data]);
        })
        .catch(console.log);
    }
  };

  const onAddToFavorite = (obj) => {
    const isFavorite = favoriteItems.some(item => item._id === obj._id);
    if (isFavorite) {
      axios.delete(`http://localhost:5353/favorites/${obj._id}`)
        .then(() => {
          setFavItems((prev) => prev.filter(item => item._id !== obj._id));
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      axios.post('http://localhost:5353/favorites', obj)
        .then(function (response) {
          setFavItems((prev) => [...prev, response.data]);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const onRemoveItem = (id) => {
    axios.delete(`http://localhost:5353/cart/${id}`)
      .then(() => {
        setCartItems((prev) => prev.filter(item => item._id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onChangeSearchInput = (event) => {
    setSearch(event.target.value);
  };

  const isItemAdded = (id) => !!addedItems[id];
  const isItemFavorite = (id) => !!addedfavoriteItems[id];

  return (
    <AppContext.Provider value={{
      products,
      cartItems,
      favoriteItems,
      isLoading,
      searchValue,
      setSearch, // если нужно менять поиск из Home
      onAddToCart,
      onAddToFavorite,
      onRemoveItem,
      isItemAdded,
      isItemFavorite,
      onChangeSearchInput,

    }}>
      <Router>
        <div className="wrapper">
          {cartOpened && <Drawer items={cartItems} onRemove={(obj) => onRemoveItem(obj)} onClickCross={() => setCartOpened(false)} />}
          <Header onClickCart={() => setCartOpened(true)} />
          <hr />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </div>
      </Router>
    </AppContext.Provider>
  );
}

export default App;