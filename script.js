/* -------------- Modal gestion ----------------- */
const log = console.log;
const modal = document.querySelector('#modal');
const addBookModal = document.querySelector('#modalBtn');
const closeModalBtn = document.querySelector('.closeBtn');
const submitBook = document.querySelector('button[type=submit]');


addBookModal.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
/*submitBook.addEventListener('click', closeModal);*/
window.addEventListener('click', clickOutside)

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








/* -------------------- Code ajout de livre ------------------ */

let myLibrary = [];  /* where i store all my books */


function Book(title,author,pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read
}


function addBookToLibrary(){
    const livre = new Book('FootRue', 'Zidane', 165);
    myLibrary.push(livre);
    const livre2 = new Book('Lola', 'Kubrik', 165);
    myLibrary.push(livre2);
    const livre3 = new Book('Terminator', 'Anorld', 165);
    myLibrary.push(livre3);
}

addBookToLibrary();

for(let i = 0; i < myLibrary.length; i++){
    log(myLibrary[i]);
}



