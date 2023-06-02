let cancel = document.getElementById('cancel');
let rcancel = document.getElementById('rcancel');
let login_container = document.getElementById('login-template');
let register_container = document.getElementById('register-template');

let login_btn = document.getElementById('login-btn');
let register_btn = document.getElementById('register-btn');

let temp = false;
let temp2 = false;
cancel.addEventListener('click', function() {
       login_container.style.display = "none";
       temp = false;
});

rcancel.addEventListener('click', function() {
  register_container.style.display = "none";
  temp2 = false;
});



login_btn.addEventListener('click', function(){
  if(temp2 && !temp){
    register_container.style.display = "none";
    login_container.style.display = "block";
    temp = true;
    temp2 = false;
  }
 else  if( login_container.style.display == "none"){
    login_container.style.display = "block";
    temp = true;
  }
  else{
    login_container.style.display = "none";
    temp = false;
  }
});

register_btn.addEventListener('click', function(){
  if(temp && !temp2){
    register_container.style.display = "block";
    login_container.style.display = "none";
    temp = false;
    temp2 = true;
  }
else if(register_container.style.display == "none"){
  register_container.style.display = "block";
  temp2 = true;
}
else{
  register_container.style.display = "none";
  temp2 = false;
}

});