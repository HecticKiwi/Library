let myLibrary = [];

for (let i = 0; i < 10; i++) {
    myLibrary.push(new Book("author", "title", 100, true));
}

displayLibrary();

function Book(author, title, pageCount, read) {
    this.author = author;
    this.title = title,
    this.pageCount = pageCount;
    this.read = read;
}

function addBookToLibrary() {

}

function displayLibrary() {
    let books = document.querySelector('.books');
    books.innerHTML = '';
    for (let i = 0; i < myLibrary.length; i++) {
        let bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        bookDiv.index = i;

        let information = document.createElement('div');
        information.classList.add('information');
        
        let author = document.createElement('p');
        author.innerHTML = `Author: ${myLibrary[i].author}`;
        information.appendChild(author);

        let title = document.createElement('p');
        title.innerHTML = `Title: ${myLibrary[i].title}`;
        information.appendChild(title);

        let pageCount = document.createElement('p');
        pageCount.innerHTML = `Page count: ${myLibrary[i].pageCount}`;
        information.appendChild(pageCount);

        let read = document.createElement('p');
        read.innerHTML = `Read: ${myLibrary[i].read? 'Yes': 'No'}`;
        information.appendChild(read);

        bookDiv.appendChild(information);
        
        let readButton = document.createElement('button');
        readButton.classList.add('button');
        readButton.innerHTML = 'Toggle Read';
        readButton.addEventListener('click', () => {
            myLibrary[bookDiv.index].read = !myLibrary[bookDiv.index].read;
            read.innerHTML = `Read: ${myLibrary[i].read? 'Yes': 'No'}`;
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

