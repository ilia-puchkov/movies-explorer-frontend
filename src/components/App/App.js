// React
// import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

// Pages
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Header from '../Header/Header';
import NotFound from '../NotFound/NotFound';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

// Popups
import InfoTooltip from '../InfoToolTip/InfoToolTip';

// CSS
import './App.css';

// Test units
import { testMovies, testLikedMovies } from '../../utils/testMovies';

function App() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className='body'>
      <div className='page'>
        <Routes>
          <Route
            path='/'
            element={
              <div>
                <Main />
                <Footer />
              </div>
            }
          />
          <Route path='/signin' element={<Login />} />
          <Route path='/signup' element={<Register />} />
          <Route
            path='/profile'
            element={
              <div>
                <Header />
              </div>
            }
          />
          <Route
            path='/movies'
            element={
              <div className='movies'>
                <Header />
                <SearchForm />
                <MoviesCardList movies={testMovies} isSavedMoviesPage={false} />
                <Footer />
              </div>
            }
          />
          <Route
            path='/saved-movies'
            element={
              <div>
                <Header />
                <SearchForm />
                <MoviesCardList movies={testLikedMovies} isSavedMoviesPage={true} />
                <Footer />
              </div>
            }
          />
          <Route path='/*' element={<NotFound />} />
        </Routes>

        <InfoTooltip />
      </div>
    </div>
  );
}

export default App;
