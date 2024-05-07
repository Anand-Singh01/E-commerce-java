import './App.css';
import Footer from './Customer/components/Footer/Footer';
import { Navigation } from './Customer/components/Navigation/Navigation.jsx';
import { Product } from './Customer/components/Product/Product.jsx';

function App() {
  return (
    <>
      <div>
        <Navigation />
      </div>
      <div>
        {/* <HomePage /> */}
        <Product/>
      </div>
       <Footer/>
    </>

  );
}

export default App;
