
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import SHOP from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Navbar />
     <Routes>
      <Route path='/' element={<SHOP/>}/>
      <Route path='/Medicinal Plants' element={<ShopCategory category="Medicinal Plants"/>}/>
      <Route path='/Decor Plants' element={<ShopCategory category="Decor Plants"/>}/>
      <Route path='/Indoor Plants' element={<ShopCategory category="Indoor Plants"/>}/>

      <Route path="Product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
      </Route>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
      <Route>

      </Route>

     </Routes>
     </BrowserRouter>
      

    </div>
  );
}

export default App;
