import React from 'react';
import './FWastePage.scss';

import { useMealContext } from '../../context/mealContext';
import Loader from '../../components/Loader/Loader';
import CategoryList from '../../components/Category/CategoryList';
import NotFound from '../../components/NotFound/NotFound';
import MealList from '../../components/Meal/MealList';
import { Navigate, useNavigate } from 'react-router-dom';

// const FWastePage = () => {
//   const { categories, meals, categoryLoading, mealsLoading } = useMealContext();

//   return <main className="main-content flex align-center flex-column text-center"></main>;
// };

const FWastePage = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }


  return (
    <div>
      <section className="main-section">
        <h1>Yuk Kurangi Food Waste dan Food Loss</h1>
        <p>Food waste is a global issue that affects the environment and society. Learn about the impact of food waste and discover ways to reduce it.</p>
        <button className="learn-more-btn">Yuk!</button>
      </section>

      <section className="foodwaste-section">
        <h1>Apa itu Food Waste?</h1>
        <p>
          Food waste, atau pemborosan pangan, merujuk pada makanan yang seharusnya dapat dikonsumsi oleh manusia tetapi malah dibuang atau tidak dimanfaatkan dengan benar. Ini dapat terjadi pada berbagai tahapan rantai pasok pangan,
          termasuk produksi, distribusi, penjualan, dan konsumsi. Food waste dapat berasal dari berbagai sumber, seperti sisa makanan di rumah tangga, restoran, atau toko makanan yang tidak dimakan dan akhirnya dibuang. Selain itu, makanan
          juga dapat terbuang selama proses distribusi karena kerusakan atau kelebihan stok yang tidak terjual. Pemborosan pangan menjadi isu global yang signifikan karena memiliki dampak yang serius terhadap keberlanjutan lingkungan,
          sumber daya alam, dan keamanan pangan. Upaya untuk mengurangi food waste melibatkan langkah-langkah seperti pendidikan konsumen, perubahan dalam praktik manajemen makanan di rumah tangga dan industri, serta pengembangan solusi
          inovatif untuk mengoptimalkan penggunaan makanan dan mengurangi limbah. Reduksi food waste dapat berkontribusi pada tujuan-tujuan pembangunan berkelanjutan, termasuk pengurangan emisi gas rumah kaca dan peningkatan efisiensi dalam
          penggunaan sumber daya.
        </p>
      </section>

      <section className="foodloss-section">
        <h1>Apa itu Food Loss?</h1>
        <p>
          Food loss, atau kehilangan pangan, merujuk pada kehilangan atau penurunan kualitas makanan pada berbagai tahap dalam rantai pasok pangan sebelum mencapai konsumen akhir. Kehilangan ini dapat terjadi selama proses produksi,
          pengolahan, penyimpanan, dan distribusi makanan. Beberapa contoh food loss melibatkan kerusakan buah-buahan dan sayuran selama panen, kehilangan selama transportasi atau penyimpanan yang tidak memadai, dan penurunan kualitas atau
          kerusakan makanan selama proses pengolahan.
        </p>

        <p>
          Kehilangan pangan dapat disebabkan oleh berbagai faktor, termasuk kondisi cuaca yang buruk, infestasi hama, kurangnya infrastruktur penyimpanan yang memadai, dan praktik pertanian yang tidak efisien. Kehilangan pangan bukan hanya
          menyebabkan pemborosan sumber daya, tetapi juga berdampak negatif pada keberlanjutan lingkungan dan keamanan pangan global. Organisasi Pangan dan Pertanian Perserikatan Bangsa-Bangsa (FAO) memperkirakan bahwa sebagian besar food
          loss terjadi pada tahap produksi dan pascapanen di negara-negara berkembang, sementara di negara-negara maju, food waste lebih umum terjadi pada tahap konsumen akhir. Upaya untuk mengurangi food loss melibatkan perbaikan
          infrastruktur, praktik pertanian yang berkelanjutan, dan pengembangan teknologi untuk memperpanjang umur simpan makanan, sehingga mengoptimalkan penggunaan sumber daya dan meningkatkan ketersediaan pangan.
        </p>
      </section>

      <section className="image-section">{/* Tambahkan gambar atau elemen lain yang sesuai */}</section>
    </div>
  );
};

export default FWastePage;
