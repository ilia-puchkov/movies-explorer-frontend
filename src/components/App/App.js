// React
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

// Pages
import Main from '../Main/Main';
import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Header from '../Header/Header';
import NotFound from '../NotFound/NotFound';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Navigation from '../Navigation/Navigation';

// Popups
import InfoTooltip from '../InfoToolTip/InfoToolTip';

// CSS
import './App.css';

// Test units
import { testMovies, testLikedMovies } from '../../utils/testMovies';


function App() {
  //Variables
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  function handleNavigationClick(){
    setIsNavigationOpen(true);
  }

  function handleNavigationClose(){
    setIsNavigationOpen(false);
  }


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
              <>
                <Header onNavigationClick={handleNavigationClick} />
                <Profile />
              </>
            }
          />
          <Route
            path='/movies'
            element={
              <div className='movies'>
                <Header onNavigationClick={handleNavigationClick} />
                <SearchForm />
                <MoviesCardList movies={testMovies} isSavedMoviesPage={false} />
                <Footer />
              </div>
            }
          />
          <Route
            path='/saved-movies'
            element={
              <div className='movies'>
                <Header onNavigationClick={handleNavigationClick} />
                <SearchForm />
                <MoviesCardList movies={testLikedMovies} isSavedMoviesPage={true} />
                <Footer />
              </div>
            }
          />
          <Route path='/*' element={<NotFound />} />
        </Routes>

        <InfoTooltip />
        <Navigation isOpen={isNavigationOpen} onClose={handleNavigationClose} />
      </div>
    </div>
  );
}

export default App;
