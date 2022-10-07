// X When the page loads, get a list of books from `http://localhost:3000/books` 
// X display their titles by creating a `li` for each book 
// X add each `li` to the `ul#list` element.

// When a user clicks the title of a book, display the book's thumbnail, description,
// and a list of users who have liked the book. 
// info should be displayed in the `div#show-panel` element.

document.addEventListener("DOMContentLoaded", function()  {

//DOM SELECTORS
const base_url = ("http://localhost:3000/books")



//EVENT LISTENERS



//FETCHERS
function getAllbooks() {
  fetch(base_url)
  .then(response => response.json())
  .then(response => response.forEach(book => addBooktoDom(book)))
}

//RENDER FUNCTIONS
function addBooktoDom(book) {
  const listUL = document.getElementById("list")
  const li = document.createElement("li")
  li.id = book.id
  li.textContent = book.title
  li.addEventListener("click", getBook(e, book))
  listUL.append(li)
}





//EVENT HANDLERS


//INITIALIZERS
getAllbooks()
});





