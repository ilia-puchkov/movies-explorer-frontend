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
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Navigation from '../Navigation/Navigation';
import EditProfilePopup from '../EditProfilePopup/EditProfilePopup';

// Popups
import InfoTooltip from '../InfoToolTip/InfoToolTip';

// CSS
import './App.css';

// Test units
import { testMovies, testLikedMovies } from '../../utils/testMovies';

function App() {
  //Variables
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);

  function handleNavigationClick() {
    setIsNavigationOpen(true);
  }

  function handlePopupOpenClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handlePopupClose() {
    setIsEditProfilePopupOpen(false);
  }

  function handleNavigationClose() {
    setIsNavigationOpen(false);
  }

  return (
    <div className='page'>
      <Header onNavigationClick={handleNavigationClick} />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<Register />} />
        <Route
          path='/profile'
          element={<Profile onPopupClick={handlePopupOpenClick} />}
        />
        <Route
          path='/movies'
          element={
            <MoviesCardList movies={testMovies} isSavedMoviesPage={false} />
          }
        />
        <Route
          path='/saved-movies'
          element={
            <MoviesCardList movies={testLikedMovies} isSavedMoviesPage={true} />
          }
        />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <Footer />

      <InfoTooltip />
      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={handlePopupClose}
      />
      <Navigation isOpen={isNavigationOpen} onClose={handleNavigationClose} />
    </div>
  );
}

export default App;
