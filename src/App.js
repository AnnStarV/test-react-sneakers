import './index.scss';

function App() {
  return (
    <div className="wrapper">
      <div className="overlay">
        <div className="drawer">
          <h2>Корзина <img className="delete" src="/assets/images/delete.svg" alt="delete" />
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


      <header>
        <div className="logoWrapper">
          <img src="/assets/images/logo.png" alt="logo" />
          <div className="logoHeader">
            <h2>REACT SNEAKERS</h2>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <div className="navigation">
          <ul>
            <li>
              <img src="/assets/images/bucket.png" alt="bucket" />
              <p>1205 грн.</p>
            </li>
            <li>
              <img src="/assets/images/favorites.png" alt="favorites" />
            </li>
            <li>
              <img src="/assets/images/profile.png" alt="favorites" />
            </li>
          </ul>
        </div>
      </header>

      <hr />

      <div className="productPage">
        <div className="headerProducts">
          <h1>Все кроссовки</h1>
          <div className="searchComponent">
            <img src="/assets/images/search.png" alt="search" />
            <input type="text" placeholder='Поиск...' />
          </div>
        </div>

        <div className="products">
          <div className="productCard">
            <div className="addToFavorite">
              <img src="/assets/images/unLike.svg" alt="like" />
            </div>
            <img className="productImage" src="/assets/images/product1.png" alt="product" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="productInfo">
              <div className="productPrice">
                <p>Цена:</p>
                <b>12 999 грн.</b>
              </div>
              <button className="addProduct">
                <img src="/assets/images/addProduct.png" alt="addProduct" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
