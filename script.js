function getFormvalue() {
    //Write your code here
	a=document.getElementByName('fname');
	b=document.getElementByName('lname');
	document.querySelector("input").addEventListener('click',()=>{
		alert(`${a.value} ${b.value}`);
	})

}
