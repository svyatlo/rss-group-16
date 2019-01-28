const container = document.querySelector('.container');
const createTable = document.createElement('table');
createTable.id = 'info-table';
createTable.classList.add('table');
createTable.classList.add('table-striped');

const currentProfile = data;

let body = '';
currentProfile.forEach((element, i) => {
  body += `
    <tr class="authorNumber_${element.id}">
      <th scope="row">${i + 1}</th>
      <td><a class="link" href="./photographer_${i + 1}.html">${element.name}</a></td>
      <td>${element.dateOfBirth}</td>
      <td>${element.placeOfBirth.city}</td>
    </tr>
  `;
});

createTable.innerHTML = `
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">ФИО</th>
      <th scope="col">Дата рождения</th>
      <th scope="col">Место Рождения</th>
    </tr>
  </thead>
  ${body}`;
container.appendChild(createTable);

function tableSearch() {
  const phrase = document.getElementById('js-search-input');
  const table = document.getElementById('info-table');
  const regPhrase = new RegExp(phrase.value, 'i');
  let flag = false;
  for (let i = 1; i < table.rows.length; i++) {
    flag = false;
    for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
      flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
      if (flag) break;
    }
    if (flag) {
      table.rows[i].style.display = '';
    } else {
      table.rows[i].style.display = 'none';
    }
  }
}

document.querySelector('#js-search-input').addEventListener('keyup', () => {
  tableSearch();
});
