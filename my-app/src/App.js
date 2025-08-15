import React from 'react';
import './App.css'
import BookCatalog from './BookCatalog';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Book Catalog</h1>
       
        
          <p>Click here to view the book catalog</p>
          <a href="/book-catalog" style={{ color: 'white', textDecoration: 'none' }}>
            Go to Book Catalog
            <main>
              
            </main>
          </a>
          <BookCatalog />
        <p>Explore a wide range of books and authors.</p>
        <p>Discover your next favorite read!</p>
        <p>Happy reading!</p>
      </header>
    </div>
  );
}

export default App;

