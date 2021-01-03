






//DEFINE VARABLE
const more = document.getElementById('myBtn1');
const less = document.getElementById('myBtn2');
const close = document.getElementById('close');
//ALIGN BUTTON CENTER
const center = document.getElementById('center');


//UNDISPLAY MORE TEAM MEMBER

less.addEventListener('click', function() {
  showLess();
  
});

function showLess() {
  close.style.display = 'none';
  more.style.display = "block";
  less.style.display = "none";

}

//DISPLAY MORE TEAM MEMBER


more.addEventListener('click', function () {
  showMore();  
});



function showMore() {
      if (more !== undefined){
      more.style.display = "none";
      close.style.display = 'block';     
      less.style.display = "block";
      }
      
      
}




