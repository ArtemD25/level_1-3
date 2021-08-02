function DataTable(config, data) {
  const numOfColumns = config.columns.length + 1;
  const table = createTableWrapperAndTable(config);
  const tHead = createTableHead(table);
  const tHeadTr = createTableHeadTr(tHead);
  createTableHeadTds(tHeadTr, config, numOfColumns);
  const tBody = createTableBody(table);
  createBodyTrs(data, numOfColumns, tBody);
}

function createTableWrapperAndTable(config) {
  const tableWrapper = document.getElementById(`${config.parent.slice(1)}`);
  const table = document.createElement("table");
  table.classList.add("my-table");
  tableWrapper.appendChild(table);
  return table;
}

// Creates Header
function createTableHead(table) {
  const tHead = document.createElement("thead");
  tHead.classList.add("my-table__header");
  table.appendChild(tHead);
  return tHead;
}

// Creates Header tr
function createTableHeadTr(tHead) {
  const tHeadTr = document.createElement("tr");
  tHeadTr.classList.add("my-table__header-row");
  tHead.appendChild(tHeadTr);
  return tHeadTr;
}

// Creates Header td-s
function createTableHeadTds(tHeadTr, config, numOfColumns) {
  for (let i = 0; i < numOfColumns; i++) {
    const tHeadTd = document.createElement("td");
    tHeadTd.classList.add("my-table__header-cell");
    tHeadTd.textContent = i === 0 ? "№" : config.columns[i - 1].title; 
    tHeadTd.textContent === "№" ? tHeadTd.setAttribute("data-my-table", "number") : tHeadTd.setAttribute("data-my-table", config.columns[i - 1].value);
    tHeadTr.appendChild(tHeadTd);
  }
}

// Creates Body
function createTableBody(table) {
  const tBody = document.createElement("tbody");
  tBody.classList.add("my-table__body");
  table.appendChild(tBody);
  return tBody;
}

// Creates Body tr-s
function createBodyTrs(data, numOfColumns, tBody) {
  data.forEach((item, index) => {
    createBodyTr(numOfColumns, tBody, index, item);
  })
}

// Creates Body tr-s
function createBodyTr(numOfColumns, tBody, index, item) {
  const tBodyTr = document.createElement("tr");
  tBodyTr.classList.add("my-table__body-row");
  createTableBodyTds(tBodyTr, numOfColumns, index, item);
  
  tBody.appendChild(tBodyTr);
}

// Creates Body td-s
function createTableBodyTds(tBodyTr, numOfColumns, index, item) {
  for (let i = 0; i < numOfColumns; i++) {
    const tBodyTd = document.createElement("td");
    tBodyTd.classList.add("my-table__body-cell");
    tBodyTd.textContent = i === 0 ? index + 1 : getTextContent(i, item);
    tBodyTr.appendChild(tBodyTd);
  }
}

// Creates text elements for body td-s
function getTextContent(index, item) {
  const correspondingHeadTr = document.querySelector(`.my-table__header-row td:nth-child(${index + 1})`);
  const key = correspondingHeadTr.getAttribute("data-my-table");
  return (item[key]);
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