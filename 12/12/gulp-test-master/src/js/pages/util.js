


(function(app) {

function remove(id)
{
  $.ajax({
    url: 'http://localhost:3000/todos/' + id,
    method: 'DELETE',
    success: function(result){
      console.log('Delete', result);
    }
  });
}
function remove(model){
  $.ajax({
    url: 'http://localhost:3000/todos',
    method: 'POST',
    data: model,
    success: function(result){
      consolg.log('Save:', result);
    }
  });
}

  app.util = {
    uniqId: function() {
      return new Date().getTime();
    },
    storage : {
      load: function (callback) {
        console.log('storage.load()');

      $.get('http://localhost:3000/todos', function(result){
      	callback(result); //함수를 인자로 던져서 함수로 리턴

        // return JSON.parse(localStorage.getItem(app.storageKey) || "[]");
	});

      },
      save: function (event, data) {
        console.log('storage.save()');
        // for(var i=0; i<data.length; i++){
        //   remove(data.id);
      },

      btnSave: function(){

        var data = app.collection.toJSON();
        console.log('sava data :', data);
        for(var i = 0; i<data.length; i++)
        {
          sava(data);
        }
      }

        }
        // localStorage.setItem(app.storageKey, JSON.stringify(data));
      }
    }
  };


  app.$wrap.on('addCollection', app.util.storage.save);
  app.$wrap.on('removeCollection', app.util.storage.save);

})(Todo);
