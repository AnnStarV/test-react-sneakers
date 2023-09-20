import './index.scss';

function App() {
  return (
    <div className="wrapper">
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
            <p>Поиск...</p>
          </div>
        </div>

        <div className="products">
          <div className="productCard">
            <button className="addToFavorite">
              <img src="/assets/images/unLike.png" alt="like" />
            </button>
            <img className="productImage" src="/assets/images/product1.png" alt="product" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="productInfo">
              <div className="productPrice">
                <p>Цена:</p>
                <b>12 999 грн.</b>
              </div>
              <button  className="addProduct">
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
