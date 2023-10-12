
import '../main.scss'

  
const foo =(name)=>{
  console.log(`aaa ${name}`)
}

foo('Mika')

window.Webflow ||= [];
window.Webflow.push(() =>{

  console.log('mika');
  
  // hide default weglot language swither
  setTimeout(function(){ document.querySelector('.weglot-container').style.display = 'none'; }, 1000);

  //show popup after page load
  setTimeout(function(){ document.querySelector('.section_popup').style.display = 'flex'; }, 5000);
	

  // disable scroll when main menu is open
  const body = document.body;
  const navigationButton = document.getElementById("w-nav-button");
  navigationButton.addEventListener('click', function (event) {
    let areaExpanded = navigationButton.getAttribute("aria-expanded")
    if (areaExpanded === 'false') {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = 'auto';
    }
   });
  

  // when user changes the language in the language swither that is inside main menu (tablet and mobile)
  // we triger the hamburger button animation and enable page scroll again, since the menu dropdown closes
  // after the user change the language
  $('.wg-dropdown-1-link').click(function(){
    let hamburgerButton = $('#main-menu-hamburger')
    hamburgerButton.prop('checked', false);
    body.style.overflow = 'auto';
  });
});
