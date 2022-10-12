let myLibrary = []

const addBookButton = document.getElementById('add-book');
const delBookButton = document.querySelectorAll('.delbtn');
var bookCardsArea = document.querySelector('.books-area')
let bookId = 0;

const titleLabel = document.getElementById('title');
const pagesLabel = document.getElementById('pages');


// function Book(title, id, isRead, pages) {
//     this.title = title;
//     this.id = id;
//     this.isRead = isRead;
//     this.pages = pages;
    
// }

class Book {

    constructor(title, id, isRead, pages) {
        this.title = title;
        this.id = id;
        this.isRead = isRead;
        this.pages = pages;
    }
}



function addBookToLibrary() {

}

addBookButton.addEventListener('click', () => {
    console.log('book was Added');
    const divCreated = document.createElement('div');
    divCreated.setAttribute('id',`bookid${bookId}`);
    bookId++;
    console.log(divCreated.id);
    

    divCreated.classList.add('card');
    divCreated.innerText = titleLabel.value;
    const pagesDisplay = document.createElement('p');
    divCreated.append(pagesDisplay);
    pagesDisplay.innerText = pagesLabel.value + ' pages';
    


    let book = new Book(titleLabel.value, divCreated.id, false, pagesLabel.value);
    titleLabel.value = '';
    pagesDisplay.value = 0;
    
    myLibrary.push(book);


    console.log(myLibrary);

    

    divCreated.style.borderRadius = '5px';
    

    const buttonDelete = document.createElement('button');
    const checkBox = document.createElement('input');
    checkBox.setAttribute('type','checkbox');

    divCreated.append(checkBox);
    
    divCreated.append(buttonDelete);

    buttonDelete.setAttribute('class', 'delbtn');
    buttonDelete.textContent = '\uD83D\uDEAB';
    buttonDelete.style.margin = '5px';





    buttonDelete.addEventListener('click', () => {
        buttonDelete.parentElement.remove();
        let bookId = buttonDelete.parentNode.id;
        console.log(bookId);
         myLibrary = myLibrary.filter(book => book.id != bookId);
         console.log(myLibrary);
        
    
    });



    checkBox.addEventListener('change', (event) => {

        let bookId = checkBox.parentNode.id;
        let bookIndex = myLibrary.findIndex((book => book.id == bookId))
        console.log('this is the book', bookIndex)
        if(event.currentTarget.checked) {
            myLibrary[bookIndex].isRead = true;
            
           
        } else {
            myLibrary[bookIndex].isRead = false;
        }
    });

    
    bookCardsArea.appendChild(divCreated);

});






