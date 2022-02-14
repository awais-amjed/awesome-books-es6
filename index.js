import Library from './modules/library.js';
import Book from './modules/book.js';
import {
  displayNewElement,
  booksList,
  showBooksList,
  addNewButtonListener,
  showListButtonListener,
  contactInfoButtonListener,
  addNewButton,
  showListButton,
  contactInfoButton,
} from './modules/html_functions.js';
import { luxon } from './modules/luxon.js';

const library = new Library();

// Display all books when the page is loaded
if (library.books.length === 0) {
  booksList.innerHTML = `
        <p class="empty-library">No Books in the Library.</p>
      `;
} else {
  library.books.forEach((book) => {
    displayNewElement(book, library);
  });
}

// Add Event Listener on Add Book button
const addBookForm = document.getElementById('add-book-form');
addBookForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (library.books.length === 0) {
    booksList.innerHTML = '';
  }
  const result = library.addBook(
    new Book(addBookForm.elements.title.value, addBookForm.elements.author.value),
  );
  if (result) {
    displayNewElement(result, library);
  }
  addBookForm.elements.title.value = '';
  addBookForm.elements.author.value = '';
  showBooksList();
});

showListButton.addEventListener('click', showListButtonListener);
addNewButton.addEventListener('click', addNewButtonListener);
contactInfoButton.addEventListener('click', contactInfoButtonListener);

const displayTime = () => {
  document.getElementById('current-date').innerHTML = luxon.DateTime.now().toLocaleString(luxon.DateTime.DATETIME_MED_WITH_SECONDS);
  setTimeout(displayTime, 1000);
};
displayTime();