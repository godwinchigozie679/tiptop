
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

