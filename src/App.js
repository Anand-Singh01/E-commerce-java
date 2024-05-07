import './App.css';
import Cart from './Customer/components/Cart/Cart.jsx';
import Footer from './Customer/components/Footer/Footer';
import { Navigation } from './Customer/components/Navigation/Navigation.jsx';
function App() {
  return (
    <>
      <div>
        <Navigation />
      </div>
      <div>
        {/* <HomePage /> */}
        {/* <Product/> */}
        {/* <ProductDetails/> */}
        <Cart/>
      </div>
       <Footer/>
    </>

  );
}

export default App;
