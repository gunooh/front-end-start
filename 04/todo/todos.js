console.log('todos.js');

//function
function getDom(id){
  return document.getElementById(id);
}

function deleteTag(target)
{
  event.target.parentElement.remove();
}


var todoStringField = getDom('todoString');
console.log(todoStringField);

todoStringField.addEventListener('keyup', function (event) {

  // console.log('todoStringField keyup!');
  if(event.keyCode === 13){

       console.log(todoStringField.value);

       var newTodo = todoStringField.value;
       todoStringField.value = "";
       
       console.log('새로운 todo:', newTodo);

       var listDom = getDom('todoList');
       listDom.innerHTML += ' \
         <li>\
             <button class="delete" onclick=\"deleteTag(this)\">×</button>\
             <input type="checkbox" class="toggle-checked">\
             <span class="text"> '+ newTodo +' </span>\
         </li>';
       }

});
