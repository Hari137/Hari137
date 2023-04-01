window.onscroll = function() {myFunction()};

var navbar = docuent.getElementById("menu");
var sticky =  menu.offsetTop;

function myFunction(){
  if(window.pageYOffset >= sticky){
    navbar.classList.add("sticky");
  }else{
    navbar.classList.remove("sticky");
  }
}
