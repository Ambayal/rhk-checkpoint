import React from 'react';
import './App.css';
import MovieCard from './components/MovieCard';
import { Route,Routes } from 'react-router-dom';
import Details from './components/Details';


function App() {
  return (
    <>
    <div>

    <Routes>
      <Route path='/'element={ <MovieCard/>}/>
      <Route path="/movie/:id" element={<Details/>}/>
    </Routes>
    </div>
    </>
  );

};

export default App;
