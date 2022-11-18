const modal = document.querySelector('#modal');
const formSubmit = document.querySelector('form');
const bookscontainer = document.querySelector('.bookcontainer');
const inputTitle = document.querySelector('#title');
const inputAuthor = document.querySelector('#author');
const inputPages = document.querySelector('#pages');
const checkbox = document.querySelector('input[type=checkbox]');
const main = document.querySelector('main');


let myLibrary = [];

main.addEventListener('click', (event) => {
    if(event.target.classList.contains('button')){
        openModal();
    }

    if(event.target.classList.contains('closeBtn')){
        closeModal()
    }

    if(event.target.classList.contains('remove')){
        const idClicked = event.target.getAttribute('data-id');
        const bookClickedUI = document.querySelector(`[data-id="${idClicked}"]`);
        deleteBookUI(bookClickedUI);
        deleteBookFromlibrary(idClicked);
    }

    if(event.target.classList.contains('isRead')){
        const idClicked = event.target.getAttribute('data-id');
        toogleReadUI(event.target)
        updateRead(idClicked);
    }
});

formSubmit.addEventListener('submit', (event) => {
    event.preventDefault();

    const newBook = new Book(inputTitle.value, inputAuthor.value, inputPages.value);
    addBookToLibrary(newBook);
    UIcreateBook(newBook);
    formSubmit.reset();
    closeModal();
});

window.addEventListener('click', clickOutside);


/*---------------------------------------------------------------- class -----------------------------------------------------------------------*/

class Book{
    constructor(title, author, pages){
        this.id = Date.now().toString()
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = checkbox.checked;
    }

    getIsRead(){
        return this.isRead;
    }

    updateIsRead(newIsRead){
        this.isRead = newIsRead;
    }
}

/*-------------------------------------------------------------- fonctions ------------------------------------------------------------------------*/

function openModal(){
    modal.style.display = 'block';
    modal.style.transition = 'all 0.5sec ease-in';
}

function addBookToLibrary(book){
    myLibrary.push(book);
}

function UIcreateBook(book){
    let note; 

    if(book.isRead){
        note = `
        <div class='note' data-id = ${book.id}>
            <p>Title : ${book.title}</p>
            <p>Author : ${book.author}</p>
            <p>Pages : ${book.pages}</p>
            <button class='isRead read' data-id = ${book.id}>READ</button>
            <button class='remove' data-id = ${book.id}>DELETE</button>
        </div> `;
    }else{
        note = `
        <div class='note' data-id = ${book.id}>
            <p>Title : ${book.title}</p>
            <p>Author : ${book.author}</p>
            <p>Pages : ${book.pages}</p>
            <button class='isRead notread' data-id = ${book.id}>NOT READ YET</button>
            <button class='remove' data-id = ${book.id}>DELETE</button>
        </div> `;
    }

    const position = 'beforeend';
    bookscontainer.insertAdjacentHTML(position, note);
}

function clickOutside(e){
    if(e.target.id === 'modal'){
        modal.style.display = 'none';
    }
}

function closeModal(){
    modal.style.display = 'none';
}

function deleteBookFromlibrary(id){
    myLibrary = myLibrary.filter((book) => book.id !== id)
}

function getBookById(id){
    const myBook = myLibrary.filter((book) => book.id === id);
    return myBook[0];
}

function deleteBookUI(book){
    bookscontainer.removeChild(book);
}

function toogleReadUI(target){
    if(target.classList.contains('read')){
        target.classList.remove('read');
        target.classList.add('notread');
        target.textContent = `NOT READ YET`;
    }else{
        target.classList.remove('notread');
        target.classList.add('read');
        target.textContent = `READ`;
    }
}

function updateRead(id){
    const book = getBookById(id);
    const bookIsRead = book.getIsRead();
    book.updateIsRead(!bookIsRead)
}