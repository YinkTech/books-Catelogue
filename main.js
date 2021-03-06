let id = "";
// localStorage.clear();
selectData();
function onFormSubmit() {
    let books = {
        bookName : document.getElementById('bookName').value,
        bookAuthor : document.getElementById('bookAuthor').value,
    };

   if (books.bookName == '') {
       document.getElementById('msg').innerHTML='Please fill the form';
   } else {
       if (id =='') {
           let arr = getCrudData();
           if (arr == null) {
               let data = [books];
               localStorage.setItem('crud', JSON.stringify(data));
           }else {
               arr.push(books);
               localStorage.setItem('crud', JSON.stringify(arr));
           }
           
                document.getElementById('bookName').value='';
                document.getElementById('bookAuthor').value='';
                document.getElementById('msg').innerHTML='Book added';
       }else {
           
       }
       selectData();
   }
}

function selectData() {
    let arr = getCrudData();
    if (arr != null) {
        let data = "";
        let sno = 1;
        for (let k in arr) {
            data = data +
            `<tr><td>${sno}</td><td>${arr[k].bookName}    <i style="margin-left:9px; font-size:15px;">by  ${arr[k].bookAuthor}</i> </td><td><a href="javascript:void(0)" onClick="deleteData(${k})">Delete</a></td></tr>`;
            sno++;
        }
        document.getElementById('root').innerHTML=data;
    }
}

function deleteData(rid) {
    let arr = getCrudData();
    arr.splice(rid, 1);
    localStorage.setItem('crud', JSON.stringify(arr));
    selectData()
}

function getCrudData() {
    let arr = JSON.parse(localStorage.getItem('crud'));
    return arr;
}

let first = document.getElementById('firstSec');
let form = document.getElementById('form');
let secondSec = document.getElementById('secondSec');
let books = document.getElementById('bookList');

function firstSectionShow() {
    first.style.display = 'block';
    secondSec.style.display = 'none';
    form.style.display = 'none';
    books.style.display = 'none';
}

function secondSectionShow() {
    first.style.display = 'none';
    secondSec.style.display = 'block';
    form.style.display = 'none';
    books.style.display = 'none';
}

function thirdSectionShow() {
    first.style.display = 'none';
    secondSec.style.display = 'none';
    form.style.display = 'block';
    books.style.display = 'none';
}

function forthSectionShow() {
    first.style.display = 'none';
    secondSec.style.display = 'none';
    form.style.display = 'none';
    books.style.display = 'block';
}

first.style.display = 'block';
secondSec.style.display = 'none';
form.style.display = 'none';
books.style.display = 'none';