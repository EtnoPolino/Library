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




/* ---------------------------------------------------------------------------------------------------------------
                                                AddEvent listener
------------------------------------------------------------------------------------------------------------------ */
addBookModal.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
formSubmit.addEventListener('submit', addBook);
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
     
    
    const bookInfo = document.createElement('div');
    const deleteNote = document.createElement('button');
    const readOrNot = document.createElement('button');
    const p_1 = document.createElement('p');
    const p_2 = document.createElement('p');
    const p_3 = document.createElement('p');
    let count = bookscontainer.children.length;    /* everytime we create a book it count  */

    

    readOrNot.addEventListener('click', toogleRead);
    deleteNote.addEventListener('click', deleteBook);
    
    bookInfo.setAttribute('data-index', `${count}`);
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

    function deleteBook(){
        const bookTitle = this.parentNode.firstChild.innerText; 
        
        myLibrary = myLibrary.filter((book) => {
            const test = `Title : ${book.title}`;
            test !== bookTitle;
        });

        log(myLibrary);
      /*  bookInfo.parentNode.removeChild(bookInfo); */
    }

   closeModal();
   formSubmit.reset();
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

function addBook(e){
    e.preventDefault();
    addBookToLibrary();
    createBook(myLibrary);
    log(myLibrary)
}

function toogleRead(){
    if(this.classList.contains('read')){
        this.classList.remove('read');
        this.classList.add('notread');
        this.innerText = `NOT READ YET`;
        log('CONTAIN READ');
    }else{
        this.classList.remove('notread');
        this.classList.add('read');
        this.innerText = `READ`;
        log('CONTAIN NOT READ');
    }
}


/*  bookInfo.parentNode.removeChild(bookInfo); */

    /* --- je supprime l'élement de la node avec bookInfo.parentNode.removeChild(bookInfo); */

    /**
     * j'attribut à chaque élément book ajouter un data-set qui va s'iterrer ?
     * 
     * Quand je veux delete.
     *          je cherche l'index du tableau myLibrary dont le dataset est égale et je le supprime/     myLibrary.splice(bookInfo.dataset.index,1);
     */