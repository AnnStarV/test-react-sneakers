import './index.scss';
import React from 'react';
import axios from 'axios';

import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

const arr = [
  {
    name: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 12999,
    image: "/assets/images/product1.png"
  },

  {
    name: 'Мужские Кроссовки Nike Air Max 270',
    price: 10500,
    image: "/assets/images/product2.jpg"
  },

  {
    name: 'Кроссовки Puma X Aka Boku Future Rider',
    price: 17069,
    image: "/assets/images/product3.jpg"
  }
];

function App() {

  const [cartOpened, setCartOpened] = React.useState(false);
  const [products, setProducts] = React.useState([]);


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
  },[]);


  return (
    <div className="wrapper">
      {cartOpened && <Drawer onClickCross={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <hr />
      <div className="productPage">
        <div className="headerProducts">
          <h1>Все кроссовки</h1>
          <div className="searchComponent" >
            <img src="/assets/images/search.png" alt="search" />
            <input type="text" placeholder='Поиск...' />
          </div>
        </div>
        <div className="products">
          {products.map((el,idx) => (
            <Card
              key={idx}
              name={el.title}
              price={el.price}
              image={el.image}
              onFavorite={() => console.log('add to bookmarks')}
              onPlus={() => console.log('add to cart')}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
