
import '../home.scss'

var webflow = webflow || [];
	Webflow.push(function() {

  
	let button = document.querySelector('[element="readmoreless"]');
    button.addEventListener('click', (e) => {
    console.log('aa',e.target.querySelector('[element="plusminus"]'))
    console.log('bbb',e.target.querySelector('[element="plusminus"]').classList)
	  e.target.querySelector('[element="plusminus"]').classList.toggle('active')
  })

});
