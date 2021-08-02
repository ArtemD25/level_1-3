You can access this site here: https://artemd25.github.io/level_1-3/

In order to use this libriary to create your own tables you need to follow 5 steps:

1. Create a html-element and provide it with unique identifier (id)

Example: <div id="future-table-wrapper"></div>

2. Connect a myTableStyle.css and myTableScript.js files to your html

Example:

<link rel="stylesheet" href="css/myTableStyle.css">

---

<body>

  <script src="myTableScript.js"></script>
</body>

3. Create one object and one array in the myTableScript.js file. Fill these objects with the data you want to add to your html-file.

Example of an object:
This object describes the header of your table and not its actual content.

const config = {
parent: '#usersTable', // Paste here the id of your table wrapper you created in the first step
columns: [
{title: 'Имя', value: 'name'}, // Type here the content of the column you want to add. Make up an unique value for it
{title: 'Фамилия', value: 'surname'},
{title: 'Возраст', value: 'age'},
]
};

Example of an array:
This object describes the actual content of your table and not its header.

const users = [ // Name it as you want
{id: 30050, name: 'Вася', surname: 'Петров', age: 12}, // Provide fields you want to display and their contents
{id: 30051, name: 'Петя', surname: 'Васечкин', age: 15},
];

NB: the names of the fields shall be the same as the values of the columns` names in the object above.

5. Launch the DataTable(config, users) function to render the table. The first argument stands for the object 
describing the table head, and the second one stands for the array describing the actual content of the table. 

You can render as many tables as you want but do not forget to create different table-wrappers with different id-s.

Also note that the table adds the number of a line to the first cell of each line.

Example: DataTable(config, users);
