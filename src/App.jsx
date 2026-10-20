import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import Footer from './Components/Footer';

import Home from './Pages/Home';
import Shop from './Pages/Shop';
import About from './Pages/About';
import Terms from './Pages/Terms';
import Contact from './Pages/Contact';
import Signup from './Pages/Signup';
import NewArrivalDetail from './Pages/NewArrivalDetail';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/login" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />

        {/* New Arrival Product Details */}
        <Route
          path="/new-arrival/:id"
          element={<NewArrivalDetail />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
