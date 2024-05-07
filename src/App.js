import './App.css';
import Footer from './Customer/components/Footer/Footer';
import Navigation from './Customer/components/Navigation/Navigation';
import HomePage from './Customer/pages/HomePage/HomePage';

function App() {
  return (
    <>
      <div>
        <Navigation />
      </div>
      <div>
        <HomePage />
      </div>
       <Footer/>
    </>

  );
}

export default App;
