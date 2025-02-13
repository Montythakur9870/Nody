
import './App.css';
import Footer from './Components/Footer.js/Footer';
import InstaLikes from './Components/FreeLikes/InstaLikes';
import Header from './Components/Header/Header';
import LoginForm from './Components/Instafollowers/Instafollowers';
// import Instafollowers from './Components/Instafollowers/Instafollowers';
import Homepage from './Page/Homepage';
import { Route, Routes } from "react-router-dom";
import ScrollToTop from './Page/ScrollToTop';

function App() {
  return (
    <>
      <Header />
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='insta-followers' element={<LoginForm />} />
        <Route path='insta-likes' element={<InstaLikes />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
