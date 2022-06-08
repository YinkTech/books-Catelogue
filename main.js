function onFormSubmit() {
    var formData = readFormData ();
    insertNewRecord(formData);

}

function readFormData() {
    var formData = {};
    formData["bookName"] = document.getElementById('bookName').value;
    formData["bookAuthor"] = document.getElementById('bookAuthor').value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById('bookList').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innnerHtml = data.bookName;
    cell2 = newRow.insertCell(1);
    cell2.innnerHtml = data.bookAuthor;
    cell3 = newRow.insertCell(2);
    cell3.innnerHtml = '<a>Delete</a>'; 
}