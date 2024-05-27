import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/layouts/Header';
import Counter from './components/Counter';
import MoviePage from './components/MoviesComponents/MoviePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <div className='p-2 m-2 row text-center'>
      <Counter/>
      <MoviePage/>
    </div>
  </React.StrictMode>
);
