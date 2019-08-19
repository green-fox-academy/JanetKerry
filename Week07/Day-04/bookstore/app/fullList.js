'use strict';

const fullList = document.getElementById('fullList');

const xhr = new XMLHttpRequest();

xhr.open('GET', 'http://localhost:3000/fullList');

xhr.onload = function() {
  const result = JSON.parse(xhr.response);
  for (let i = 0; i < result.length; i++) {
    const row = document.createElement('tr');

    let item = document.createElement('td');
    item.textContent = result[i].book_name;
    row.appendChild(item);

    item = document.createElement('td');
    item.textContent = result[i].aut_name;
    row.appendChild(item);

    item = document.createElement('td');
    item.textContent = result[i].cate_descrip;
    row.appendChild(item);

    item = document.createElement('td');
    item.textContent = result[i].pub_name;
    row.appendChild(item);

    item = document.createElement('td');
    item.textContent = result[i].book_price;
    row.appendChild(item);

    fullList.appendChild(row);
  }
};

xhr.send();
