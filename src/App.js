import './index.scss';
import React from 'react';
import axios from 'axios';

import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';


function App() {

  const [cartOpened, setCartOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  const [products, setProducts] = React.useState([]);
  const [searchValue, setSearch] = React.useState('');
  const [addedItems, setAddedItems] = React.useState({});

  React.useEffect(() => {
    
    axios.get('http://localhost:5353/getProducts')
    .then(function (response) {
      // handle success
      setProducts(response.data);
      console.log(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })

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
  },[]);

  const onAddToCart = (obj) => {
    console.log(obj);
    axios.post('http://localhost:5353/cart', obj)
      .then(function (response) {
        setCartItems((prev) => [...prev, response.data]);
        setAddedItems((prev) => ({ ...prev, [obj._id]: true }));
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

  const onChangeSearchInput = (event) => {
    setSearch(event.target.value);
  }

  return (
    <div className="wrapper">
      {cartOpened && <Drawer items={cartItems} onRemove={(obj)=>onRemoveItem(obj)} setAddedItems={setAddedItems} onClickCross={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <hr />
      <div className="productPage">
        <div className="headerProducts">
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}"`: "Все кроссовки"}</h1>
          <div className="searchComponent" >
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
              onFavorite={() => console.log('add to bookmarks')}
              onPlus={(obj) => onAddToCart(obj)}
              onRemoveItem={(obj) => onRemoveItem(obj)}
              isAdded={!!addedItems[el._id]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
