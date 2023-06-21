// React
import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

// Pages
import Main from '../Main/Main';
import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Header from '../Header/Header';
import NotFound from '../NotFound/NotFound';
import Navigation from '../Navigation/Navigation';
import Movies from '../Movies/Movies';

// Popups
import InfoTooltip from '../InfoToolTip/InfoToolTip';

//Context
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

// CSS
import './App.css';

// Routes
import ProtectedRouteElement from '../ProtectedRoute/ProtectedRoute';

// APIs
import MainApi from '../../utils/MainApi';
import MoviesApi from '../../utils/MoviesApi';
import SavedMovies from '../SavedMovies/SavedMovies';

function App() {
  //Variables
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  const [isInEditState, setIsInEditState] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegisteredOk, setIsRegisteredOk] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState();

  //User
  const [currentUser, setCurrentUser] = useState({});

  const navigate = useNavigate();

  const mainApi = new MainApi({
    url: 'https://api.movies-reras.students.nomoredomains.rocks',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
  });

  const moviesApi = new MoviesApi({
    url: 'https://api.nomoreparties.co/',
    headers: {
      'content-type': 'application/json',
    },
  });

  // Получение данных
  useEffect(() => {
    setIsLoading(true);
    handleCheckToken();
    

    if (isLoggedIn) {
      setIsLoading(true);
      Promise.all([mainApi.getUserInfo(), mainApi.getUserMovies()])
        .then(([userData, movies]) => {
          setCurrentUser(userData);

          setSavedMovies(movies);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        })
        .finally(() => {
          setIsLoading(false);
        })
    }
    console.log(currentUser);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  // Получение всех фильмов
  useEffect(() => {
    setIsLoading(true);

    moviesApi
      .getInitialMovies()
      .then((movies) => {
        localStorage.setItem('isAllMovies', JSON.stringify(movies));
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Работа с пользователем
  //  Логин
  function handleLogin(data) {
    mainApi
      .login(data)
      .then((data) => {
        setIsLoggedIn(true);
        localStorage.setItem('jwt', data.token);
        navigate('/movies', { replace: true });
      })
      .catch((err) => {
        console.log(err);
        setIsRegisteredOk(false);
        setIsRegisterPopupOpen(true);
      });
  }

  //Регистрация
  function handleRegistration(data) {
    mainApi
      .register(data)
      .then((res) => {
        setIsRegisteredOk(true);
        setIsRegisterPopupOpen(true);
        navigate('/signin', { replace: true });
      })
      .catch((err) => {
        console.log(err);
        setIsRegisteredOk(false);
        setIsRegisterPopupOpen(true);
      });
  }

  //Проверка токена
  const handleCheckToken = () => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      mainApi
        .checkToken(jwt)
        .then((res) => {
          setIsLoggedIn(true);
          navigate('/movies', { replace: true });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  // Логаут
  function handleLogout() {
    localStorage.removeItem('jwt');
    navigate('/signin', { replace: true });
    setIsLoggedIn(false);
  }

  // Обновление данных профиля
  function handleUpdateUser(userData) {
    mainApi
      .updateUserInfo(userData)
      .then((userData) => {
        setCurrentUser(userData);
        setIsError('');
        handleProfileClose();
      })
      .catch((err) => {
        console.log(err);
        setIsError(err);
      });
  }

  // Работа с фильмами
  // Добавление нового фильма
  function handleAddMovie(movieData) {
    mainApi
      .addCard(movieData)
      .then((newMovie) => {
        setSavedMovies([newMovie, ...savedMovies]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleDeleteMovie(movie) {
    mainApi
      .deleteCard(movie._id)
      .then(() => {
        setSavedMovies((state) => state.filter((c) => c._id !== movie._id));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Работа с меню и предупреждениями
  // Попап
  function closeAllPopups() {
    setIsRegisterPopupOpen(false);
  }

  // Боковое навигационное меню
  function handleNavigationClick() {
    setIsNavigationOpen(true);
  }

  function handleNavigationClose() {
    setIsNavigationOpen(false);
  }

  // Форма редактиврования профиля
  function handleProfileClick() {
    setIsInEditState(true);
    console.log(isInEditState);
  }

  function handleProfileClose() {
    setIsInEditState(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Header
          onNavigationClick={handleNavigationClick}
          isLoggedIn={isLoggedIn}
        />
        <Routes>
          <Route
            path='/movies'
            element={
              <ProtectedRouteElement
                element={Movies}
                isLoggedIn={isLoggedIn}
                //movies={movies}
                savedMovies={savedMovies}
                isSavedMoviesPage={false}
                onMovieLike={handleAddMovie}
                onMovieDelete={handleDeleteMovie}
                isLoading={isLoading}
              />
            }
          />
          <Route path='/' element={<Main />} />
          <Route path='/signin' element={<Login onLogin={handleLogin} />} />
          <Route
            path='/signup'
            element={<Register onRegister={handleRegistration} />}
          />
          <Route
            path='/profile'
            element={
              <ProtectedRouteElement
                element={Profile}
                isLoggedIn={isLoggedIn}
                editState={isInEditState}
                isInEdit={handleProfileClick}
                onClose={handleProfileClose}
                onLogOut={handleLogout}
                onUpdateUser={handleUpdateUser}
                error={isError}
              />
            }
          />
          <Route
            path='/saved-movies'
            element={
              <ProtectedRouteElement
                element={SavedMovies}
                isLoggedIn={isLoggedIn}
                movies={savedMovies}
                savedMovies={savedMovies}
                isSavedMoviesPage={true}
                onMovieDelete={handleDeleteMovie}
                isLoading={isLoading}
              />
            }
          />
          <Route path='/*' element={<NotFound />} />
        </Routes>
        <Footer />

        <InfoTooltip
          isSuccess={isRegisteredOk}
          isOpen={isRegisterPopupOpen}
          onClose={closeAllPopups}
        />
        <Navigation isOpen={isNavigationOpen} onClose={handleNavigationClose} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
