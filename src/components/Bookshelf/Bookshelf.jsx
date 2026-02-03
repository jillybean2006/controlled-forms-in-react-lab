import { useState } from 'react';

const Bookshelf = () => {

  const [books, setBooks] = useState([
  { title: 'Fourth Wing', author: 'Rebecca Yarros' },
  { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
]);

const [newBook, setNewBook] = useState({ title: '', author: '' });

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setNewBook(prev => ({ ...prev, [name]: value }));
};

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setNewBook(prev => ({ ...prev, [name]: value }));
};

const handleSubmit = (e) => {
  e.preventDefault();

  setBooks(prevBooks => [...prevBooks, newBook]);
  setNewBook({ title: '', author: '' });
};

  return (
    <div>
      <h2>My Bookshelf</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newBook.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={newBook.author}
          onChange={handleInputChange}
        />
        <button type="submit">Add Book</button>
      </form>
      {books.map((book, index) => (
        <div key={index}>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
        </div>
      ))}
    </div>
  );
}

  export default Bookshelf;
