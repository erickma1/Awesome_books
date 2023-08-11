class BookManager {
  constructor() {
    this.storeKey = 'Added Books';
    this.storeData = JSON.parse(localStorage.getItem(this.storeKey)) || [];
    this.form = document.querySelector('form');
    this.listOfBooks = document.querySelector('.container');
    this.list = document.getElementById('list');
    this.addNew = document.getElementById('addNew');
    this.contact = document.getElementById('contact');
    this.addNewSction = document.getElementById('add-book');
    this.listSection = document.getElementById('list-books');
    this.contactSection = document.getElementById('contact-container');

    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.addNewData();
    });
//methods for display

    this.displayBooks();
  }

  updateData() {
    localStorage.setItem(this.storeKey, JSON.stringify(this.storeData));
  }

  createBooks() {
    let books = '';
    for (let i = 0; i < this.storeData.length; i += 1) {
      books += `
         <section id='books'>
         <article class='books-container'>
         ${this.storeData[i].title} by
          ${this.storeData[i].author}<br>
          <button class='remove-btn' onclick='bookManager.removeBook('${i}')'>Remove</button>
          </article>
          </section>
        `;
    }
    return books;
  }

  displayBooks() {
    this.listOfBooks.innerHTML = `
        <p>
          ${this.createBooks()}
        </p>
      `;
  }

  addNewData() {
    const title = document.querySelector('.title');
    const author = document.querySelector('.author');
    const book = {
      title: title.value,
      author: author.value,
    };
    this.storeData.push(book);
    this.updateData();
    this.displayBooks();
    title.value = '';
    author.value = '';
  }

  removeBook(i) {
    this.storeData.splice(i, 1);
    this.updateData();
    this.displayBooks();
  }
}
/* eslint-disable no-unused-vars */
const bookManager = new BookManager();
