
var prevTarget = null;
var nextTarget = null;
var check = new Array();
var div = document.getElementsByClassName('card close');
var num1;
var num2;
var prevFlag = false;


function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

function printCards(){
  cards.forEach(function(card){
    $wrap.append('<div class="card close" num="'+card+'">\
    <div class="front">  </div> \
    <div class="back">'+ card +'</div></div>');
  });
}

function addEvent(){

  $wrap.on('click', '.card', function(event){

    var $target = $(event.currentTarget);
    var num = $target.attr('num');

    console.log('click card!', num)

});
}

function getNum()
{
  for(i=0 ; i<8; i++)
  {
    check[i] = div[i].getAttribute('num');
  }
}

function searchPair()
{
  for(var i = 0; i < 8; i++)
  {
    if(check[i] == 1)
    {
      div[i].addEventListener('click',function(event){
        if(prevFlag == false)
        {
          prevTarget = event.target;
          prevTarget.setAttribute('class', 'red');
          prevFlag = true;
        }
        else if(prevFlag == true)
        {
          nextTarget = event.target;
          nextTarget.setAttribute('class', 'red');
          num1 = prevTarget.parentNode.getAttribute('num');
          num2 = nextTarget.parentNode.getAttribute('num');

          if(num1 !== num2)
          {
              setTimeout(function(event)
              {
                prevTarget.setAttribute('class','front');
                nextTarget.setAttribute('class','front');
              }, 500);
          }
          prevFlag = false;
        }

      });
    }

    else if(check[i] == 2)
    {

      div[i].addEventListener('click',function(event){

        if(prevFlag == false)
        {
          prevTarget = event.target;
          prevTarget.setAttribute('class', 'blue');
          prevFlag = true;
        }

        else if(prevFlag == true)
        {
          nextTarget = event.target;
          nextTarget.setAttribute('class', 'blue');
          num1 = prevTarget.parentNode.getAttribute('num');
          num2 = nextTarget.parentNode.getAttribute('num');

          if(num1 !== num2)
          {
            setTimeout(function(event)
            {
              prevTarget.setAttribute('class','front');
              nextTarget.setAttribute('class','front');
            }, 500);

          }
          prevFlag = false;
        }

      });
    }

    else if(check[i] == 3)
    {
      div[i].addEventListener('click',function(event){
      if(prevFlag == false)
      {
        prevTarget = event.target;
        prevTarget.setAttribute('class', 'green');
        prevFlag = true;
      }
      else if(prevFlag == true)
      {
        nextTarget = event.target;
        nextTarget.setAttribute('class', 'green');
        num1 = prevTarget.parentNode.getAttribute('num');
        num2 = nextTarget.parentNode.getAttribute('num');

        if(num1 !== num2)
        {
          setTimeout(function(event)
          {
            prevTarget.setAttribute('class','front');
            nextTarget.setAttribute('class','front');
          }, 500);

        }
        prevFlag = false;
      }

      });
    }

    else
    {
      div[i].addEventListener('click',function(event){
      if(prevFlag == false)
      {
        prevTarget = event.target;
        prevTarget.setAttribute('class', 'magenta');
        prevFlag = true;
      }
      else if(prevFlag == true)
      {
        nextTarget = event.target;
        nextTarget.setAttribute('class', 'magenta');
        num1 = prevTarget.parentNode.getAttribute('num');
        num2 = nextTarget.parentNode.getAttribute('num');

        if(num1 !== num2)
        {
          setTimeout(function(event)
          {
            prevTarget.setAttribute('class','front');
            nextTarget.setAttribute('class','front');
          }, 500);

        }
        prevFlag = false;
      }

      });
    }
    }

  }

var cards = [1,2,3,4, 1,2,3,4];
var $wrap = $('.wrap');

//init
shuffle(cards);
console.log(cards)
printCards();
addEvent();
getNum();
searchPair();
