
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import SHOP from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import medicinal_banner from './Components/Assets/medicinal-banner.jpg';
import decor_banner from './Components/Assets/decor-banner.jpg';
import indoor_banner from './Components/Assets/indoor-banner.jpg';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Navbar />
     <Routes>
      <Route path='/' element={<SHOP/>}/>
      <Route path='/Medicinal Plants' element={<ShopCategory banner = {medicinal_banner} category="Medicinal Plant"/>}/>
      <Route path='/Decor Plants' element={<ShopCategory banner = {decor_banner} category="Decor Plant"/>}/>
      <Route path='/Indoor Plants' element={<ShopCategory banner = {indoor_banner} category="Indoor Plant"/>}/>

      <Route path="Product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
      </Route>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
      <Route>

      </Route>

     </Routes>
     <Footer />
     </BrowserRouter>
      

    </div>
  );
}

export default App;
