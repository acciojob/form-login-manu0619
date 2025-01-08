function getFormvalue() {
  //Write your code here
  a = document.getElementsByName("fname")[0];
  b = document.getElementsByName("lname")[0];

  alert(`${a.value} ${b.value}`);
}
