document.querySelector('form').addEventListener('submit',signup);
let signupArr=JSON.parse( localStorage.getItem('signup')) ||[];
function signup(event){
    event.preventDefault()
 let obj={
    email:document.querySelector('#email').value,
    pass:document.querySelector('#pass').value
 }
signupArr.push(obj);
localStorage.setItem('signup',JSON.stringify(signupArr))

console.log(email.value,pass)
if(email.value==''||pass.value==''){
    alert('PLYZ Fill all Details🙄')
  
    
}else{
    alert('signup successfull🙂')
 window.location.href='./login.html'
 
}
}

