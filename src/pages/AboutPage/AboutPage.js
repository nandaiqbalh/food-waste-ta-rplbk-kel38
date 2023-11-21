import React from 'react';
import './AboutPage.scss';
import { useMealContext } from '../../context/mealContext';
import Loader from '../../components/Loader/Loader';
import CategoryList from '../../components/Category/CategoryList';
import NotFound from '../../components/NotFound/NotFound';
import MealList from '../../components/Meal/MealList';

const AboutPage = () => {
  return (
    <div>
      <section className="about-section">
        <h1>Kenalan sama Kelompok 38</h1>
        <p>Spesial untuk tugas Praktikum RPLBK 2023</p>
        <button className="learn-more-btn">Adel</button> <br></br>
        <button className="learn-more-btn">Nanda</button> <br></br>
        <button className="learn-more-btn">Abram</button> <br></br>
        <button className="learn-more-btn">Ruben</button> <br></br>
      </section>

      <section className="image-section">{/* Tambahkan gambar atau elemen lain yang sesuai */}</section>
    </div>
  );
};

export default AboutPage;
