let myLibrary = [];

myLibrary.push(new Book("Harper Lee", "To Kill a Mockingbird", 281, true));
myLibrary.push(new Book("The Great Gatsby", "F. Scott Fitzgerald", 208, true));
myLibrary.push(new Book("One Hundred Years of Solitude", "Gabriel García Márquez", 448, false));
myLibrary.push(new Book("A Passage to India", "E.M. Forster", 368, false));
myLibrary.push(new Book("Invisible Man", "Ralph Ellison", 581, true));

displayLibrary();

function Book(author, title, pageCount, read) {
    this.author = author;
    this.title = title,
    this.pageCount = pageCount;
    this.read = read;
}

function displayLibrary() {
    let books = document.querySelector('.books');
    books.innerHTML = '';

    for (let book of myLibrary) {
        let bookDiv = document.createElement('div');
        bookDiv.classList.add('book', 'box');

        let information = document.createElement('div');
        information.classList.add('information');

        for (let property in book) {
            let label = document.createElement('h4');
            label.innerHTML =
                property === 'author'? 'Author':
                property === 'title'? 'Title':
                property === 'pageCount'? 'Page count':
                'Read';
            information.appendChild(label);
            let value = document.createElement('p');
            value.innerHTML =
                book[property] === true? 'Yes':
                book[property] === false? 'No':
                book[property];
            information.appendChild(value);
        }

        bookDiv.appendChild(information);
        
        let readButton = document.createElement('button');
        readButton.classList.add('button');
        readButton.innerHTML = 'Toggle Read';
        readButton.addEventListener('click', () => {
            book.read = !book.read;
            information.lastChild.innerHTML = book.read? 'Yes': 'No';
        })
        bookDiv.appendChild(readButton);

        let deleteButton = document.createElement('button');
        deleteButton.classList.add('button');
        deleteButton.innerHTML = 'Delete';
        deleteButton.addEventListener('click', () => {
            books.removeChild(bookDiv);
        })
        bookDiv.appendChild(deleteButton);

        books.appendChild(bookDiv);
    }
}

let modal = document.querySelector('.modal');

let newBook = document.querySelector('.new-book');
newBook.addEventListener('click', () => {
    modal.style.display = "flex";
    document.querySelectorAll('form > input').forEach((input) => input.value = '')
})

window.onclick = function (e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
}

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    let author = document.querySelector('.author').value;
    let title = document.querySelector('.title').value;
    let pageCount = document.querySelector('.pageCount').value;
    let read = document.querySelector('.read').checked;

    myLibrary.push(new Book(author, title, pageCount, read));
    displayLibrary();
    modal.style.display = "none";
})
