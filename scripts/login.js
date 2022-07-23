let loginArr = JSON.parse(localStorage.getItem('signup')) || []

document.querySelector('form').addEventListener('submit',login)

function login(event){
    event.preventDefault();
    let email=document.querySelector('#email').value;
    let pass = document.querySelector('#pass').value;
    console.log(email,pass)
   //  console.log(loginArr)
    if(email==''||pass===''){
       alert('fill all details 🙄')
    
    }
 
   else{
       flag = false
       for (let i = 0; i < loginArr.length; i++) {
          if (loginArr[i].email == email && loginArr[i].pass == pass) {
             flag = true;
             localStorage.setItem('name', email)
             window.location.href = './index.html'
             return alert('Login Succesfull 🤩');
            
          }
       }
       if (flag == false) {
          alert('wrong details 🙄')
       }
   } 


}