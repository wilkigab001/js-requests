console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('The form has been submitted successfully');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let image = document.querySelector('img')

image.addEventListener('mouseover', () => {
	alert('you so seggsy')
})