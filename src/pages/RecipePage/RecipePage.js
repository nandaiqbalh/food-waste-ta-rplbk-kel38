import React from 'react';
import './RecipePage.scss';
import { useMealContext } from '../../context/mealContext';
import Loader from '../../components/Loader/Loader';
import CategoryList from '../../components/Category/CategoryList';
import NotFound from '../../components/NotFound/NotFound';
import MealList from '../../components/Meal/MealList';

import SearchForm from './SearchForm';

const RecipePage = () => {
  const { categories, meals, categoryLoading, mealsLoading } = useMealContext();

  return (
    <main className="main-content header">
      <div className="header-content flex align-center justify-center flex-column text-center">
        <SearchForm />

        <h1 className="text-white header-title ls-2">Yuk kita jangan buang-buang bahan makanan</h1>
        <p className="text-uppercase text-white my-3 ls-1">Cari resep yang kamu inginkan!</p>
      </div>

      {mealsLoading ? <Loader /> : meals === null ? <NotFound /> : meals?.length ? <MealList meals={meals} /> : ''}
      {categoryLoading ? <Loader /> : <CategoryList categories={categories} />}
    </main>
  );
};

export default RecipePage;
