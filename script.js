/* -------------- Modal gestion ----------------- */
const log = console.log;
const modal = document.querySelector('#modal');
const addBookModal = document.querySelector('#modalBtn');
const closeModalBtn = document.querySelector('.closeBtn');
const formSubmit = document.querySelector('form');
const bookscontainer = document.querySelector('.bookcontainer');
const inputTitle = document.querySelector('#title');
const inputAuthor = document.querySelector('#author');
const inputPages = document.querySelector('#pages');
const checkbox = document.querySelector('input[type=checkbox]');


/*

let myLibrary = [];
let newBook; */

/*---------------------------------------------------------------------------------------------------------------
                                                AddEvent listener
-----------------------------------------------------------------------------------------------------------------*/
/*

addBookModal.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
formSubmit.addEventListener('submit', addBook);
window.addEventListener('click', clickOutside);

*/



/*---------------------------------------------------------------------------------------------------------------
                                                functions
-----------------------------------------------------------------------------------------------------------------*/
/*
function openModal(){
    modal.style.display = 'block';
    modal.style.transition = 'all 0.5sec ease-in';
}

function closeModal(){
    modal.style.display = 'none';
}

function clickOutside(e){
    if(e.target.id === 'modal'){
        modal.style.display = 'none';
    }
}

function createBook(book){
    const lastElem = book[book.length - 1];
     
    
    const bookInfo = document.createElement('div');
    const deleteNote = document.createElement('button');
    const readOrNot = document.createElement('button');
    const p_1 = document.createElement('p');
    const p_2 = document.createElement('p');
    const p_3 = document.createElement('p');

    readOrNot.addEventListener('click', toogleRead);
    deleteNote.addEventListener('click', deleteBookFromlibrary);
    
    p_1.innerText = `Title : ${lastElem.title}`;
    p_2.innerText = `Author : ${lastElem.author}`;
    p_3.innerText = `Pages : ${lastElem.pages}`;

    if(lastElem.isRead){
        readOrNot.innerText = `READ`;
        readOrNot.classList.add('read');
    }else{
        readOrNot.innerText = `NOT READ YET`;
        readOrNot.classList.add('notread');
    }

    deleteNote.innerText = `DELETE`;
    bookInfo.classList.add('note');
    deleteNote.classList.add('remove');
    bookInfo.appendChild(p_1);
    bookInfo.appendChild(p_2);
    bookInfo.appendChild(p_3);
    bookInfo.appendChild(readOrNot);
    bookInfo.appendChild(deleteNote);
    bookscontainer.appendChild(bookInfo);

    function deleteBookFromlibrary(){
        bookInfo.parentNode.removeChild(bookInfo);
        myLibrary = myLibrary.filter((b) => b.title !== `${lastElem.title}`);
    }

   closeModal();
   formSubmit.reset();
}

*/

/* -------------------- Code ajout de livre ------------------ */

/*

function Book(title, author, pages, isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(){ 
   if(checkbox.checked){
        newBook = new Book(inputTitle.value, inputAuthor.value, inputPages.value, true);
   }else{
        newBook = new Book(inputTitle.value, inputAuthor.value, inputPages.value, false);
   }
    myLibrary.push(newBook);
}

function addBook(e){
    e.preventDefault();
    addBookToLibrary();
    createBook(myLibrary);
}

function toogleRead(){
    if(this.classList.contains('read')){
        this.classList.remove('read');
        this.classList.add('notread');
        this.innerText = `NOT READ YET`;
    }else{
        this.classList.remove('notread');
        this.classList.add('read');
        this.innerText = `READ`;
    }
}

*/

/*--------------------------------------------------Refactor all the code-------------------------------------------------*/

const main = document.querySelector('main');
let myLibrary = [];

main.addEventListener('click', (event) => {
    if(event.target.classList.contains('button')){
        openModal();
    }
})

formSubmit.addEventListener('submit', (event) => {
    event.preventDefault();

    const newBook = new Book(inputTitle.value, inputAuthor.value, inputPages.value, checkbox.value);
    addBookToLibrary(newBook);
    UIcreateBook(newBook);
});




class Book{
    constructor(title, author, pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = false;
    }
}


function openModal(){
    modal.style.display = 'block';
    modal.style.transition = 'all 0.5sec ease-in';
}


function addBookToLibrary(book){
    myLibrary.push(book);
}

function UIcreateBook(book){
    const note = `
        <div class='note'>
            <p>Title : ${book.title}</p>
            <p>Author : ${book.author}</p>
            <p>Pages : ${book.pages}</p>
            <button class='read'>READ</button>
            <button class='remove'>DELETE</button>
        </div>
    `;

    const position = 'beforeend';
    bookscontainer.insertAdjacentHTML(position, note);
}