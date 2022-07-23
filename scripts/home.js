// let abhi=document.querySelector('#space');
// console.log(abhi.innerText)
let abhi=localStorage.getItem('name');
console.log(abhi);
document.querySelector('#space').innerText=abhi;