let myLibrary = [];
let buttonRead = document.querySelectorAll("#read");
let buttonDelete = document.querySelectorAll("del");
let buttonUnread = document.querySelectorAll("#unread");
let buttonNew = document.querySelector(".new")
function book (title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function()  {
    return `${title}, by ${author}, ${pages}, ${read}`
  }
}
const library = document.querySelector(".library");
function addBookToLibrary(a, b, c, d) {
  myLibrary.push(new book(a, b, c, d));  
  createCards()
}


function createCards() {
  let numBooks = myLibrary.length;
  library.innerHTML = "";
  for (let i = 0; i < numBooks; i++) {
    populateCards(`${i}`);
  }
  deleteListener()
  unreadListener()
  readListener()
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
  if (myLibrary[index].read === true) {
    read.classList.add('read');
    read.setAttribute('data-index', `${index}`);
    read.textContent = `I've read this book`;
    card.appendChild(read);
  }
  if (myLibrary[index].read === false) {
    read.classList.add('read');
    read.setAttribute('data-index', `${index}`);
    read.textContent = `I have not read this book`;
    card.appendChild(read);
  }
  const buttons = document.createElement('div');
  buttons.classList.add('buttons');
  buttons.setAttribute('data-index', `${index}`);
  card.appendChild(buttons);
  const del = document.createElement('button');
  del.setAttribute('data-index', `${index}`);
  del.setAttribute('id', 'del');
  del.innerText = "Delete";
  buttons.appendChild(del);
  if (myLibrary[index].read == true) {
    const unread = document.createElement('button');
    unread.setAttribute('data-index', `${index}`);
    unread.setAttribute('id', 'unread');
    unread.innerText = "Mark as unread";
    buttons.appendChild(unread);
  } if (myLibrary[index].read == false) {
    const read = document.createElement('button');
    read.setAttribute('data-index', `${index}`);
    read.setAttribute('id', 'read');
    read.innerText = "Mark as read";
    buttons.appendChild(read);
    
  }
  
}
function blankCard() {
  const blank = document.createElement('div');
  blank.classList.add('card');
  blank.setAttribute("id", "blank")
  library.appendChild(blank);
  const newButton = document.createElement('div');
  newButton.setAttribute("id", "newb")
  newButton.innerHTML = "<button class='new'>Add New Book</button>";
  blank.appendChild(newButton);
  buttonNew = document.querySelector(".new")
  buttonNew.onclick = () => newBookForm();
}


function newBookForm () {
  const blank = document.getElementById("blank");
  blank.remove();
  const newForm = document.createElement('form');
  newForm.classList.add('card');
  newForm.setAttribute("id", "newBookForm");
  newForm.setAttribute("autocomplete", "off")
  library.appendChild(newForm);
  const titleEntry = document.createElement('div');
  titleEntry.classList.add('inputField')
  titleEntry.setAttribute("id", "titleEntry")
  titleEntry.innerHTML = `<label for='title' id='titleEntry'>Title:</label>
  <input type="text" id="titleField" name="title">`
  newForm.appendChild(titleEntry);
  const authorEntry = document.createElement('div');
  authorEntry.classList.add('inputField')
  authorEntry.setAttribute('id', "authorEntry")
  authorEntry.innerHTML = `<label for='author' id='authorEntry'>Author:</label>
  <input type="text" id="authorField" name="author">`
  newForm.appendChild(authorEntry);
  const pagesEntry = document.createElement('div');
  pagesEntry.classList.add('inputField')
  pagesEntry.setAttribute("id", "pagesEntry")
  pagesEntry.innerHTML = `<label for='pages' id='pagesEntry'>Pages:</label>
  <input type="text" id="pagesField" name="pages">`
  newForm.appendChild(pagesEntry);
  const readEntry = document.createElement('div');
  readEntry.classList.add('inputField')
  readEntry.setAttribute("id", "readEntry")
  readEntry.innerHTML = `<label for='read' id='readEntry'>Check if read:
  </label><input type="checkbox" id="readCheckbox" value="true" name="read">`
  newForm.appendChild(readEntry);
  const buttonSubmit = document.createElement('div');
  buttonSubmit.classList.add('.buttons')
  buttonSubmit.setAttribute("id", "buttonSubmit")
  buttonSubmit.innerHTML = `<button onclick="submitForm()">Submit</button>`
  newForm.appendChild(buttonSubmit);
}
function submitForm() {
  let t = document.querySelector('#titleField')
  let a = document.querySelector("#authorField")
  let p = document.querySelector("#pagesField")
  let r = document.querySelector("#readCheckbox")
  addBookToLibrary(t.value, a.value, p.value, r.checked)
}
function deleteListener() {
  buttonDelete = document.querySelectorAll("#del");
  buttonDelete.forEach((button) => {
    button.addEventListener('click', () => {
      myLibrary.splice(button.dataset.index, 1)
      createCards()
    })
  })
}
addBookToLibrary("sasf", "1234124", "123123", true)
function unreadListener() {
  buttonUnread = document.querySelectorAll("#unread");
  buttonUnread.forEach((button) => {
    button.addEventListener('click', () => {
      myLibrary[button.dataset.index]["read"] = false;
    })
  })
}
function readListener() {
  buttonRead = document.querySelectorAll("#read");
  buttonRead.forEach((button) => {
    button.addEventListener('click', (e) => {
      myLibrary[button.dataset.index]["read"] = true;
      createCards()
    })
})
}