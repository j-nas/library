let myLibrary = [];

function book (title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function()  {
    return `${title}, by ${author}, ${pages}, ${read}`
  }
}
function addBookToLibrary(a, b, c, d) {
  myLibrary.push(new book(a, b, c, d))  
}

//temporary books to add to library
addBookToLibrary("titles1", "authors2", "69", "yes");
addBookToLibrary("titles3", "authrodude", "420", "no");
addBookToLibrary("tit235", "gudguy", "123", "no");
//temporary books to add to library

const library = document.querySelector(".library");
function createCards() {
  let numBooks = myLibrary.length;
  library.innerHTML = "";
  for (let i = 0; i < numBooks; i++) {
    populateCards(`${i}`);
  }
  blankCard()
}

function populateCards(index) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.setAttribute('data-index', `${index}`);
  library.appendChild(card);
  const title = document.createElement('div');
  title.classList.add('title');
  title.setAttribute('data-index', `${index}`);
  title.textContent = `Title: ${myLibrary[index].title}`;
  card.appendChild(title);
  const author = document.createElement('div');
  author.classList.add('author');
  author.setAttribute('data-index', `${index}`);
  author.textContent = `Author: ${myLibrary[index].author}`;
  card.appendChild(author);
  const pages = document.createElement('div');
  pages.classList.add('pages');
  pages.setAttribute('data-index', `${index}`);
  pages.textContent = `Number of pages: ${myLibrary[index].pages}`;
  card.appendChild(pages);
  const read = document.createElement('div');
  read.classList.add('read');
  read.setAttribute('data-index', `${index}`);
  read.textContent = `Read: ${myLibrary[index].read}`;
  card.appendChild(read);
  const buttons = document.createElement('div')
  buttons.classList.add('buttons')
  buttons.setAttribute('data-index', `${index}`)
  buttons.textContent = `BUTTONS HERE`
  card.appendChild(buttons)

}
function blankCard() {
  const blank = document.createElement('div');
  blank.classList.add('blankCard');
  // blank.textContent = 'ADD BOOK TO LIBRARY HERE UNDERCONSTRUCTOIN.GIF'
  library.appendChild(blank)
  const newButton = document.createElement('div')
  newButton.innerHTML = "<button>Add New Book</button>"
  blank.appendChild(newButton);
}
//automaticaly populate cards, remove for production
createCards()
//automatically populate , remove pro forduction