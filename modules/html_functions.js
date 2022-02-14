export const booksList = document.getElementById('books-list');
const contactInfoSection = document.getElementById('contact-info');
const inputFormSection = document.getElementById('input-form');
const awesomeBooksSection = document.getElementById('awesome-books');
export const showListButton = document.getElementById('show-list-button');
export const addNewButton = document.getElementById('add-new-button');
export const contactInfoButton = document.getElementById('contact-info-button');

export const displayNewElement = (book, library) => {
  // Shows the added book in html
  const bookDiv = document.createElement('div');
  bookDiv.classList.add('book');

  const removeButton = document.createElement('button');
  removeButton.classList.add('remove-button');
  removeButton.textContent = 'Remove';

  bookDiv.innerHTML = `
  <div class="book-store">
    <h2 class="book-title">"${book.title}"</h2>
    <p class="book-author">by ${book.author}</p>
  </div>
  `;
  bookDiv.appendChild(removeButton);

  booksList.appendChild(bookDiv);

  removeButton.addEventListener('click', () => {
    library.removeBook(book);
    bookDiv.remove();

    if (library.books.length === 0) {
      booksList.innerHTML = `
        <p class="empty-library">No Books in the Library.</p>
      `;
    }
  });
};

const switchActive = (node) => {
  if (showListButton !== node && showListButton.classList.contains('active')) {
    showListButton.classList.remove('active');
  } else if (addNewButton !== node && addNewButton.classList.contains('active')) {
    addNewButton.classList.remove('active');
  } else if (contactInfoButton !== node && contactInfoButton.classList.contains('active')) {
    contactInfoButton.classList.remove('active');
  }
  node.classList.add('active');
};

export const showBooksList = () => {
  switchActive(showListButton);
  awesomeBooksSection.style.display = 'flex';

  contactInfoSection.style.display = 'none';
  inputFormSection.style.display = 'none';
};

export const showListButtonListener = (event) => {
  event.preventDefault();
  showBooksList();
};

export const addNewButtonListener = (event) => {
  event.preventDefault();
  switchActive(addNewButton);
  inputFormSection.style.display = 'flex';

  contactInfoSection.style.display = 'none';
  awesomeBooksSection.style.display = 'none';
};

export const contactInfoButtonListener = (event) => {
  event.preventDefault();
  switchActive(contactInfoButton);
  contactInfoSection.style.display = 'flex';

  awesomeBooksSection.style.display = 'none';
  inputFormSection.style.display = 'none';
};