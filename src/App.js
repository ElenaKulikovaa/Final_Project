import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Main } from './modules/Main/Main'
import { Catalog } from './modules/Catalog/Catalog'
import { Cart } from './modules/Cart/Cart'
import { Contacts } from './modules/Contacts/Contacts'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/catalog' element={<Catalog />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/contacts' element={<Contacts />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;