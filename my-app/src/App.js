import React, {useState} from 'react';
import {Book, BookCatalog as CatalogClass} from './User_first'; // <-- Make sure this matches your file

function App() {
  const [catalog] = useState(() => {
    const c = new CatalogClass();
    c.addBook(new Book('The Hobbit', 'J.R.R. Tolkien', 1937, '978-0547928227'));
    c.addBook(new Book('1984', 'George Orwell', 1949, '978-0451524935'));
    return c;
  });
  const [books, setBooks] = useState(catalog.listBooks());
  return (
    <div>
      
      <h2>Book Catalog</h2>
      <ul>
        {books.map((book, idx) => (
          <li key={idx}>
             {book.title} by {book.author} ({book.year})
          </li>
        ))}
      </ul>
    </div>
  );

}

export default App;

