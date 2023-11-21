import './App.scss';
// react router dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// pages
import { Home, MealDetails, Recipe, Error, Category, Login, About, FWaste } from './pages/index';
// components
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';


function App() {
  return (
    <BrowserRouter>
      {/* <Header />
      <Sidebar /> */}
      <Routes>
        <Route path="/" element={[<Header />, <Home />]} />
        <Route path="/meal/:id" element={[<Header />, <MealDetails />]} />
        <Route path="/meal/category/:name" element={[<Header />, <Category />]} />
        <Route path="*" element={<Error />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={[<Header />, <FWaste />]} />
        <Route path="/Recipe" element={[<Header />, <Recipe />]} />
        <Route path="/About" element={[<Header />, <About />]} />
        <Route path="/FWaste" element={[<Header />, <FWaste />]} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
