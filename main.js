class Library {
    #books = [];

    constructor() {
        this.#books.push(new Book("Harper Lee", "To Kill a Mockingbird", 281, true));
        this.#books.push(new Book("The Great Gatsby", "F. Scott Fitzgerald", 208, true));
        this.#books.push(new Book("One Hundred Years of Solitude", "Gabriel García Márquez", 448, false));
        this.#books.push(new Book("A Passage to India", "E.M. Forster", 368, false));
        this.#books.push(new Book("Invisible Man", "Ralph Ellison", 581, true));
    }

    display() {
        let booksNode = document.querySelector(".books");
        booksNode.innerHTML = "";

        for (let book of this.#books) {
            let bookNode = document.createElement("div");
            bookNode.classList.add("book", "box");

            let information = document.createElement("div");
            information.classList.add("information");

            for (let property in book) {
                let label = document.createElement("h4");
                label.textContent =
                    property === "author"
                        ? "Author"
                        : property === "title"
                            ? "Title"
                            : property === "pageCount"
                                ? "Page count"
                                : "Read";
                information.appendChild(label);
                let value = document.createElement("p");
                value.textContent = book[property] === true ? "Yes" : book[property] === false ? "No" : book[property];
                information.appendChild(value);
            }

            bookNode.appendChild(information);

            let readButton = document.createElement("button");
            readButton.classList.add("button");
            readButton.textContent = "Toggle Read";
            readButton.addEventListener("click", () => {
                book.read = !book.read;
                information.lastChild.innerHTML = book.read ? "Yes" : "No";
            });
            bookNode.appendChild(readButton);

            let deleteButton = document.createElement("button");
            deleteButton.classList.add("button");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", () => {
                booksNode.removeChild(bookNode);
            });
            bookNode.appendChild(deleteButton);

            booksNode.appendChild(bookNode);
        }
    }

    addBook(book) {
        this.#books.push(book);
    }
}

class Book {
    author;
    title;
    pageCount;
    read;

    constructor(author, title, pageCount, read) {
        this.author = author;
        this.title = title;
        this.pageCount = pageCount;
        this.read = read;
    }
}

const library = new Library();
library.display();

let modal = document.querySelector(".modal");
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

let newBook = document.querySelector(".new-book");
newBook.addEventListener("click", () => {
    modal.style.display = "flex";
    document.querySelectorAll("form > input").forEach((input) => (input.value = ""));
});

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    let author = document.querySelector(".author").value;
    let title = document.querySelector(".title").value;
    let pageCount = document.querySelector(".pageCount").value;
    let read = document.querySelector(".read").checked;

    library.addBook(new Book(author, title, pageCount, read));
    library.display();
    modal.style.display = "none";
});
