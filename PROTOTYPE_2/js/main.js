const h1 = document.querySelector("h1")
//refatorando 
h1.addEventListener("click" , functions)

function functions(){
  console.log(" executando functions ")
  const ask = document.getElementById('ask')
  ask.classList.toggle('div')
  animation()
}
function animation(){
   // document.querySelector('iconOPENask img').style.transitionDuration = '0.5s'
    document.querySelector('.iconOPENask img').style.transform = 'rotate(180deg)'
    console.log("Executado o animation")
}

//document.getElementById(i).style.WebkitTransitionDuration="1s"; dure 1 segundo
//document.getElementById(i).style.webkitTransform = 'rotate(40deg)'; rode 40 graus