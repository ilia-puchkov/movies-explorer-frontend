// Форматирование продолжительности фильма
function toHours(minutes) {
  const calcHours = Math.floor(minutes / 60);
  const calcMinutes = minutes % 60;

  return calcHours + 'ч ' + calcMinutes + 'м';
}

// Форматирование ссылки под бэк
function setURL(url) {
  const imageURL = 'https://api.nomoreparties.co' + url;

  return imageURL;
}

export { toHours, setURL };
