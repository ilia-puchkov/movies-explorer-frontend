class MainApi {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  //Проверка
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`У нас ошибка ${res.status}`);
  }

  //Данные пользователя
  getUserInfo() {
    return fetch(this._url + '/users/me', {
      method: 'GET',
      headers: this._headers,
    }).then(this._checkResponse);
  }

   // Регистрация
   register(data) {
    return fetch(this._url + "/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: data.email, password: data.password, name: data.name }),
    }).then(this._checkResponse);
  }

  // Авторизация
  login(data) {
    return fetch(this._url + "/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: data.email, password: data.password }),
    }).then(this._checkResponse);
  }

  // Проверка токена
  checkToken(jwt) {
    return fetch(this._url + "/users/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    }).then(this._checkResponse);
  }

  //Обновление данных пользователя
  updateUserInfo(userData) {
    return fetch(this._url + '/users/me', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: userData.name,
        email: userData.email,
      }),
    }).then(this._checkResponse);
  }

   //получение фильмов
   getUserMovies(){
    return fetch(this._url + '/movies', {
      method: 'GET',
      headers: this._headers
    })
    .then(this._checkResponse);
  }

  //Добавление фильма
  addCard(movieData) {
    console.log(movieData);
    return fetch(this._url + '/movies', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        country: movieData.country,
        director: movieData.director,
        duration: movieData.duration,
        year: movieData.year,
        description: movieData.description,
        image: 'https://api.nomoreparties.co' + movieData.image.url,
        trailerLink: movieData.trailerLink,
        thumbnail: 'https://api.nomoreparties.co' + movieData.image.formats.thumbnail.url,
        movieId: movieData.id,
        nameRU: movieData.nameRU,
        nameEN: movieData.nameEN,
      }),
    }).then(this._checkResponse);
  }

  //Удаление фильма
  deleteCard(movieId) {
    return fetch(this._url + `/movies/${movieId}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then(this._checkResponse);
  }
}

export default MainApi;
