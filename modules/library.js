import storageAvailable from './local_storage.js';

export default class Library {
  // Library class consists of a list of books
  books = [];

  constructor() {
    this.books = [];
    const localBooksData = localStorage.getItem('books');
    if (localBooksData) {
      this.books = JSON.parse(localBooksData);
    }
  }

  bookExists(book) {
    // Check if a book exists
    for (let i = 0; i < this.books.length; i += 1) {
      if (this.books[i].title === book.title && this.books[i].author === book.author) {
        return true;
      }
    }
    return false;
  }

  addBook(book) {
    // Add a new book to the list of books
    if (!this.bookExists(book)) {
      this.books.push(book);
      this.updateLocalStorage();
      return book;
    }
    // eslint-disable-next-line no-alert
    alert('The Book and Author exist');
    return null;
  }

  removeBook(book) {
    // Remove a book from the list of lists
    for (let i = 0; i < this.books.length; i += 1) {
      if (this.books[i].title === book.title && this.books[i].author === book.author) {
        this.books.splice(i, 1);
        this.updateLocalStorage();
        return;
      }
    }
  }

  updateLocalStorage() {
    // Updates the Local Storage
    if (storageAvailable('localStorage')) {
      localStorage.setItem('books', JSON.stringify(this.books));
    }
  }
}