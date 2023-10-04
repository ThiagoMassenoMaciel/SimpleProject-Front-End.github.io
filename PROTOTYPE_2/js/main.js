const hh1 = document.querySelector("h1")
console.log("o que tem dentro de h1 antes ? \n",hh1)

const h1s = document.querySelectorAll("h1")
console.log("\n E o que tem dentro de h1 agora ? \n",h1s)

let count = 1 ;
//refatorando 
h1s.forEach(   (Each_h1) =>           Each_h1.addEventListener("click" , functions)   )

function functions(){
  console.log(" executando functions ")
  const ask = document.getElementById('ask')
  ask.classList.toggle('div')
  animation()
  
}
function animation(){
    console.log("\n\n",count)
    let ValueForToAnimate = 0
    ValueForToAnimate = count%2 === 0 ? ValueForToAnimate = 0 : ValueForToAnimate = 180

   // document.querySelector('iconOPENask img').style.transitionDuration = '0.5s'
    document.querySelector('.iconOPENask img').style.transform = `rotate(${ValueForToAnimate}deg)`
    document.querySelector('.iconOPENask img').style.transitionDuration = '0.5s'
    console.log("Executado o animation")

    count++
    console.log(count, "\n\n")
}

//document.getElementById(i).style.WebkitTransitionDuration="1s"; dure 1 segundo
//document.getElementById(i).style.webkitTransform = 'rotate(40deg)'; rode 40 graus