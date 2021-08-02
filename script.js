function DataTable(config, data) {
  const tableWrapper = document.getElementById(`${config.parent.slice(1)}`);
  const table = document.createElement("table");
  table.classList.add("my-table");
  tableWrapper.appendChild(table);
  const numOfColumns = config.columns.length + 1;

  const tHead = document.createElement("thead");
  tHead.classList.add("my-table__header");
  table.appendChild(tHead);

  const tHeadTr = document.createElement("tr");
  tHeadTr.classList.add("my-table__header-row");
  tHead.appendChild(tHeadTr);

  for (let i = 0; i < numOfColumns; i++) {
    const tHeadTd = document.createElement("td");
    tHeadTd.classList.add("my-table__header-cell");
    tHeadTd.textContent = i === 0 ? "№" : config.columns[i - 1].title; 
    tHeadTd.textContent === "№" ? tHeadTd.setAttribute("data-my-table", "number") : tHeadTd.setAttribute("data-my-table", config.columns[i - 1].value);
    tHeadTr.appendChild(tHeadTd);
  }
}

const config1 = {
  parent: '#usersTable',
  columns: [
    {title: 'Имя', value: 'name'},
    {title: 'Фамилия', value: 'surname'},
    {title: 'Возраст', value: 'age'},
  ]
};

const users = [
  {id: 30050, name: 'Вася', surname: 'Петров', age: 12},
  {id: 30051, name: 'Вася', surname: 'Васечкин', age: 15},
];

DataTable(config1, users);