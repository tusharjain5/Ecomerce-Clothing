import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Dashboard } from './components/dashboard/Dashboard';
import { Pagenotfound } from './components/pagenotfound/Pagenotfound';
import { Productdetail } from './components/dashboard/Productdetail';
import { AddtoCart } from './components/addtocart/AddtoCart';
import Login from './components/login/Login';
import { Contact } from './components/contact/Contact';
import About from './components/aboutus/About';
import { Signup } from './components/login/Signup';



function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="*" element={<Pagenotfound/>}/>
        <Route path="product-detail/:id" element={<Productdetail/>}/>
        <Route path="cart" element={<AddtoCart/>}/>
        <Route path="login" element={<Login/>}/>
       <Route path="contact-us" element={<Contact/>}/>
       <Route path="about" element={<About/>}/>
       <Route path="sign-up" element={<Signup/>}/>
      </Routes>
    <Footer />
   </BrowserRouter>
  );
}

export default App;
