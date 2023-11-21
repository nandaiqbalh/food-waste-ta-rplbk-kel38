import './App.scss';
// react router dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// pages
import { Home, MealDetails, Error, Category, Login } from './pages/index';
// components
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <BrowserRouter>
      {/* <Header />
      <Sidebar /> */}
      <Routes>
        <Route path="/" element={[<Header />, <Sidebar />, <Home />]} />
        <Route path="/meal/:id" element={[<Header />, <Sidebar />, <MealDetails />]} />
        <Route path="/meal/category/:name" element={[<Header />, <Sidebar />, <Category />]} />
        <Route path="*" element={<Error />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
