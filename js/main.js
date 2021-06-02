var addBook = document.getElementById('add-book')
addBook.addEventListener('click', added);
var tbody = document.getElementById('tbody');
var newRow = document.getElementById('new-row');

function added(e) {
    e.preventDefault();
    console.log(20);
    var bookName = document.getElementById('book-name').value;
    var authorName = document.getElementById('author-name').value;
    var inbs = document.getElementById('inbs').value;
    console.log(bookName);
    console.log(authorName);
    console.log(inbs);

    var tbody = document.getElementById("tbody");

    let data = `<tr> 
                <td>${bookName}</td>
                <td>${authorName}</td>
                <td>${inbs}</td>
                </tr>`;
    tbody.innerHTML += data;

    libForm = document.getElementById('libForm');
    libForm.reset();

}