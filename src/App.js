import './App.css';
import Home from './screens/Home'
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import AddProduct from './components/AddProduct.js';
import Products from './screens/Products.js';
import ProductPage from './components/ProductPage.js';
import NearToExpiryProducts from './screens/NearToExpiryProducts.js'
import Invo from './screens/Invo.js'
import Expired from './screens/Expired.js'
import Stats from './screens/Stats.js'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path='/AddProduct' element={<AddProduct/>}/>
          <Route exact path='/Products' element={<Products/>}/>
          <Route exact path='/ProductPage' element={<ProductPage/>}/>
          <Route exact path='/NearToExpiryProducts' element={<NearToExpiryProducts/>}/>
          <Route exact path='/Invo' element={<Invo/>}/>
          <Route exact path='/Expired' element={<Expired/>}/>
          <Route exact path='/Stats' element={<Stats/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App;
