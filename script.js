/* -------------- Modal gestion ----------------- */
const log = console.log;
const modal = document.querySelector('#modal');
const addBookModal = document.querySelector('#modalBtn');
const closeModalBtn = document.querySelector('.closeBtn');
const submitBook = document.querySelector('button[type=submit]');
const bookscontainer = document.querySelector('.bookcontainer');
const inputTitle = document.querySelector('#title');
const inputAuthor = document.querySelector('#author');
const inputPages = document.querySelector('#pages');
const checkbox = document.querySelector('input[type=checkbox]');

/*const deleteNote = document.querySelector('.remove');
const readOrNot = document.querySelector('.note > button:first-of-type'); */


addBookModal.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
submitBook.addEventListener('click', addBook);
window.addEventListener('click', clickOutside);




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
    const lastElem = book[book.length - 1]; /* get the last elem of the array */
    
    /*
    const bookInfo = document.createElement('div');
    const p_1 = document.createElement('p');
    const p_2 = document.createElement('p');
    const p_3 = document.createElement('p');
    const deleteNote = document.createElement('button');
    const readOrNot = document.createElement('button');
   
    

    p_1.innerText = `Title : ${}`;
    p_2.innerText = `Title : ${}`;
    p_3.innerText = `Title : ${}`;  
    deleteNote.innerText = `DELETE`;
    readOrNot.innerText = `READ`;

    bookInfo.classList.add('note');
    deleteNote.classList.add('remove');

    bookscontainer.appendChild(bookInfo);
    bookInfo.appendChild(p_1);
    bookInfo.appendChild(p_2);
    bookInfo.appendChild(p_3);
    bookInfo.appendChild(readOrNot);
    bookInfo.appendChild(deleteNote);


 
   closeModal(); */
    log(lastElem);
    log(lastElem.title);
    log(lastElem.author);
    log(lastElem.pages);
    log(lastElem.isRead);
} // end function createBook






/* -------------------- Code ajout de livre ------------------ */

let myLibrary = [];
let newBook;

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

/*
function display(array){
    for(let i = 0; i < array.length; i++){
        log(array[i]);
    }
} */

function addBook(e){
    e.preventDefault();
    addBookToLibrary();
    createBook(myLibrary);
}



