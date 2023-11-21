import './App.scss';
// react router dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// pages
import { Home, Recipe, MealDetails, Error, Category, About, FWaste } from './pages/index';
// components
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<FWaste />} />
        <Route path="/Recipe" element={<Recipe />} />
        <Route path="/About" element={<About />} />
        <Route path="/FWaste" element={<FWaste />} />

        <Route path="/meal/:id" element={<MealDetails />} />
        <Route path="/meal/category/:name" element={<Category />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
