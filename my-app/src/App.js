import React, {useState} from 'react';
import {Book, BookCatalog as CatalogClass} from './User_first'; // <-- Make sure this matches your file
import JoobImg from './Joob.png'; // <-- Make sure this matches your image file

function App() {
  const [catalog] = useState(() => {
    // Initialize the catalog with some books
    const catalog = new CatalogClass('My Book Catalog', 'A collection of my favorite books', '12345');

    // Add some books to the catalog
    const c = new CatalogClass();

    c.addBook(new Book('The Hobbit', 'J.R.R. Tolkien', 1937, '978-0547928227'));
    c.addBook(new Book('1984', 'George Orwell', 1949, '978-0451524935'));
    c.addBook(new Book('To Kill a Mockingbird', 'Harper Lee', 1960, '978-0061120084'));
    c.addBook(new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925, '978-0743273565'));
    c.addBook(new Book('Pride and Prejudice', 'Jane Austen', 1813, '978-1503290563'));
    
    return c;
  });
  const [books, setBooks] = useState(catalog.listBooks());
  return (
    <div>
      
      <h2>Book Catalog supported by Capstone Team</h2>
      <button onClick={() => setBooks(catalog.listBooks())}>
        Refresh Book List
      </button>

     < img src={JoobImg} alt="Joob Logo"  width={200} height ={200}  />
      


      <ul>
        {books.map((book, idx) => (
          <li key={idx}>
             {book.title} by {book.author} ({book.year})
          </li>
          
        ))}
        

      </ul>
    </div>
    // function Signup() {
    //   return (
    //     <div>
    //       <h2>Sign Up</h2>
    //       <form>
    //         <label>
    //           Username:
    //           <input type="text" name="username" required />
    //         </label>
    //         <br />
    //         <label>
    //           Password:
    //           <input type="password" name="password" required />
    //         </label>
    //         <br />
    //         <button type="submit">Sign Up</button>
    //       </form>
    //     </div>
    //   );
    // }
  );

}

export default App;

