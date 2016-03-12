var total = 0;
while(true)
{
  num = prompt('합할 수를 입력해 주세요.');
  if(num !== null)
  {
    total = total + parseInt(num, 10);
    continue;
  }
  else
  {
    alert("입력하신 수의 합은 " + total + " 입니다.");
    break;
  }
}
