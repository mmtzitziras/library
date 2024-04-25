const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}




function addBookToLibrary(Book) {
  myLibrary.push(Book);
}

pride = new Book("Pride and Prejudice", "Jane Austen", 432, true);
lotr = new Book("The Lord Of The Rings", "J.R.R. Tolkien", 1178, false);
frankestein = new Book("Frankenstein", "Mary Shelley", 280, false);
mockingbird = new Book("To Kill a Mockingbird", "Harper Lee", 324, true);

addBookToLibrary(pride);
addBookToLibrary(lotr);
addBookToLibrary(mockingbird);
console.log(myLibrary[0].title)



function updateLibrary(){
 
    document.querySelector("#library tbody").innerHTML = myLibrary.map((book, i) => {return `<tr><td>${book.title}</td><td>${book.author}</td><td>${book.pages}</td>
                                                                                    ${book.read ? 
                                                                                    ('<td><button id="read-button" onclick="toggleRead(' + i + ')"><img src="./images/read.svg" alt="read-button"></button>') 
                                                                                    :('<td><button id="not-read-button" onclick="toggleRead(' + i + ')"><img src="./images/read.svg" alt="not-read-button"></button>')}
                                                                                    </td><td><button id="remove-button" onclick="removeBook(${i})"><img src="./images/delete.svg" alt="delete-button"></button>
                                                                                    </td></tr>`}).join('');
}




updateLibrary();


const subBtn = document.querySelector("#sub-button");
subBtn.addEventListener('click', function(event) {
    const newTitle = document.querySelector('#title').value;
    const newAuthor = document.querySelector('#author').value;
    const newPages = document.querySelector('#pages').value;
    const newRead = document.querySelector('#read').checked;
    const newBook = new Book(newTitle, newAuthor, newPages, newRead);
    addBookToLibrary(newBook);
    updateLibrary();
    event.preventDefault();
});

function removeBook(i) {
	myLibrary.splice(i, 1);
	updateLibrary();
}

function toggleRead(i) {
	if (myLibrary[i].read) {
		myLibrary[i].read = false;
	} else {
		myLibrary[i].read = true;
	}
	updateLibrary();
}
