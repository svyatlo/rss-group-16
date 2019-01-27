const arrPhotograph = [
  {
    name: 'Анастасия Шпагина',
    date: '1993',
    city: 'Одесса',
    link: './photographer_1.html',
    id: '01',
  },
  {
    name: 'Николай Соболев ',
    date: '1983',
    city: 'Санкт-Петербург',
    link: './photographer_2.html',
    id: '02',
  },
  {
    name: 'Иванов Иван Иванович ',
    date: '1575',
    city: 'Minsk',
    link: './photographer_3.html',
    id: '03',
  },
  {
    name: 'Сидоров Сидор Сидорович',
    date: '637',
    city: 'Gomel',
    link: './photographer_4.html',
    id: '04',
  },
  {
    name: 'Александров Александр Александрович',
    date: '1347',
    city: 'брайтенбитч',
    link: './photographer_5.html',
    id: '05',
  },
  {
    name: 'Горбачев Александр Александрович',
    date: '1347',
    city: 'Петербург',
    link: './photographer_6.html',
    id: '06',
  },
  {
    name: 'Горбачев Александр Александрович',
    date: '1347',
    city: 'Петербург',
    link: './photographer_7.html',
    id: '07',
  }];

const container = document.querySelector('.container');
const createTable = document.createElement('table');
createTable.id = 'info-table';
createTable.classList.add('table');
createTable.classList.add('table-striped');

let body = '';
arrPhotograph.forEach((element, i) => {
  body += `
    <tr class="authorNumber_${element.id}">
      <th scope="row">${i + 1}</th>
      <td><a class="link" href="${element.link}">${element.name}</a></td>
      <td>${element.date}</td>
      <td>${element.city}</td>
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
  const phrase = document.getElementById('search-text');
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

document.querySelector('#search-text').addEventListener('keyup', () => {
  tableSearch();
});
