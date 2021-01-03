//VARIABLE DEFINITION
const firstOrderIcon = document.querySelector('#firstOrderIcon');
const secondOrderIcon = document.querySelector('#secondOrderIcon');
const quote = document.querySelector('#quote');

//Add event listener
firstOrderIcon.addEventListener('click', function(){
  showMenu();
});

function showMenu(){
  
  firstOrderIcon.style.display = 'none';
  secondOrderIcon.style.display = 'block';
  quote.style.display = 'block';
}

//CLOSE

//Add event listener
secondOrderIcon.addEventListener('click', function(){
  closeMenu();
});

function closeMenu(){
  firstOrderIcon.style.display = 'block';
  secondOrderIcon.style.display = 'none';
  quote.style.display = 'none';
}




//NAVIGATION

//DEFINE VARIABLE FOR NAV
const addMenu = document.querySelector('#icon-nav1');
const menu2 = document.querySelector('.nav-container');


//Add Event Listener
addMenu.addEventListener('click', displayNav);

//SHOW NAV
function displayNav(){

    if(menu2.className === 'nav-container'){
        menu2.classList.add('resposive');  
             
        menu2.classList.remove('nav-container');

    }else{
        menu2.classList.remove('resposive');
        menu2.classList.add('nav-container');
        

    }


   

}



