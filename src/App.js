import './App.css';
import Footer from './Customer/components/Footer/Footer';
import { Navigation } from './Customer/components/Navigation/Navigation.jsx';
import { ProductDetails } from './Customer/components/ProductDetails/ProductDetails.jsx';
function App() {
  return (
    <>
      <div>
        <Navigation />
      </div>
      <div>
        {/* <HomePage /> */}
        {/* <Product/> */}
        <ProductDetails/>
      </div>
       <Footer/>
    </>

  );
}

export default App;
