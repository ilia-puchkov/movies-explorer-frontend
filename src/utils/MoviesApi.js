class MoviesApi {
  constructor({url, headers}) {
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

  //получение фильмов
  getInitialMovies(){
    return fetch(this._url + '/movies', {
      method: 'GET',
      headers: this._headers
    })
    .then(this._checkResponse);
  }
}

export default MoviesApi;