import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <main className='not-found'>
      <h1 className='not-found__title'>404</h1>
      <p className='not-found__text'>Страница не найдена</p>
      <Link to='/'>
        <button className='not-found__button' type='button'>Назад</button>
      </Link>
    </main>
  );
}

export default NotFound;