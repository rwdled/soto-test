// import React, { useState } from 'react';

// const booksData = [
//   { id: 1, title: 'Book Title 1', author: 'Author 1', description: 'Short description of Book 1.' },
//   { id: 2, title: 'Book Title 2', author: 'Author 2', description: 'Short description of Book 2.' },
//   // Add more book objects as needed
// ];

// function BookCatalog() {
//   const [search, setSearch] = useState('');

//   const filteredBooks = booksData.filter(book =>
//     book.title.toLowerCase().includes(search.toLowerCase()) ||
//     book.author.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div>
//       <h1>Book Catalog</h1>
//       <input
//         type="text"
//         placeholder="Search by title or author"
//         value={search}
//         onChange={e => setSearch(e.target.value)}
//       />
//       <ul>
//         {filteredBooks.map(book => (
//           <li key={book.id}>
//             <h2>{book.title}</h2>
//             <p><strong>Author:</strong> {book.author}</p>
//             <p>{book.description}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default BookCatalog;
