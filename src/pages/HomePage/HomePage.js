import React from 'react';
import './HomePage.scss';
import './HomePage.scss';
import { useMealContext } from '../../context/mealContext';
import Loader from '../../components/Loader/Loader';
import CategoryList from '../../components/Category/CategoryList';
import NotFound from '../../components/NotFound/NotFound';
import MealList from '../../components/Meal/MealList';
import { Navigate, useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const { categories, meals, categoryLoading, mealsLoading } = useMealContext();

  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }



  return (
    <main className="main-content">
      {mealsLoading ? <Loader /> : meals === null ? <NotFound /> : meals?.length ? <MealList meals={meals} /> : ''}
      {categoryLoading ? <Loader /> : <CategoryList categories={categories} />}

    </main>
  );
};

export default HomePage;
