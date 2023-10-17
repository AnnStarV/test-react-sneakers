import './index.scss';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';


const arr = [
  { name: 'Мужские Кроссовки Nike Blazer Mid Suede', 
    price: 12999, 
    image: "/assets/images/product1.png" },

  { name: 'Мужские Кроссовки Nike Air Max 270', 
    price: 10500, 
    image: "/assets/images/product2.jpg" },

  { name: 'Кроссовки Puma X Aka Boku Future Rider', 
    price: 17069, 
    image: "/assets/images/product3.jpg" }
];

function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />
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
          {
            arr.map((el) => {
                return <Card name={el.name} price={el.price} image={el.image}/>
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
