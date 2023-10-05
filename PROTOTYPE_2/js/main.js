
const p1 = document.querySelector("#p1")
const p2 = document.querySelector("#p2")

const ask1 = document.getElementById('ask1')
const ask2 = document.getElementById('ask2')

console.log(p1)
console.log(ask1)

console.log(p2)
console.log(ask2)

let count = 1 ;
//refatorar este codigo
p1.addEventListener("click" , ()=> functions(ask1,p1))   
p2.addEventListener("click" , ()=> functions(ask2,p2))   

function functions(ask,p){
  console.log(" executando functions ")
  ask.classList.toggle('div')
  animation(p)
  
}

/*    este n deu certo pois o event listener ja esta executando automaticamente mesmo quando eu n clico na h1 e 
function functions(id){
  console.log(" executando functions ")
  const ask = document.getElementById(`${id}`)
  ask.classList.toggle('div')
  animation()
  
}
*/

/*
function functions(id){
  console.log(" executando functions ")
  const ask = document.getElementById(id)
  ask.classList.toggle('div')
  animation()
  
}
*/
/*
function functions(ask){
  console.log(" executando functions ")
  const ask = document.getElementById('ask1')
  ask.classList.toggle('div')
  animation()
  
}
*/
function animation(p){
  console.log(count)
  let ValueForToAnimate = 0
  ValueForToAnimate = count%2 === 0 ? ValueForToAnimate = 0 : ValueForToAnimate = 180
  
 // document.querySelector('iconOPENask img').style.transitionDuration = '0.5s'
  p.querySelector('img').style.transform = `rotate(${ValueForToAnimate}deg)`
  p.querySelector('img').style.transitionDuration = '0.5s'
  console.log("Executado o animation")

  count++
  console.log(count)
}
/*
function animation(){
    console.log(count)
    let ValueForToAnimate = 0
    ValueForToAnimate = count%2 === 0 ? ValueForToAnimate = 0 : ValueForToAnimate = 180
    
   // document.querySelector('iconOPENask img').style.transitionDuration = '0.5s'
    document.querySelector('.iconOPENask img').style.transform = `rotate(${ValueForToAnimate}deg)`
    document.querySelector('.iconOPENask img').style.transitionDuration = '0.5s'
    console.log("Executado o animation")

    count++
    console.log(count)
}
*/
// criar uma call function diferente para  cada pergunta pois chamar as mesma função passando parametros(nome do id que contem a resposta da pergunta clicada) diferentes não deu certo 