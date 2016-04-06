console.log('todos.js')
return document.getElementById(id);
}


var todoStringField = getDom('todoString');
console.log(todoStringField);

todoStringField.addEventListener('keyup', function (event))

console.log(todoStringField.value);

var newTodo = todoStringField,value;
todoStringField.value = "";

console.log('새로운 todo: ', newTodo);
