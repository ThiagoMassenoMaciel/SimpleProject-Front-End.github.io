const ShowAsk = 'Aqui é para aparecer a resposta'

function CreateElementP(ShowAsk){
  const divBELLOW = document.querySelector('div')
  const pergunta = document.querySelector('h1')
  pergunta.addEventListener( "click", putASKhtml(ShowAsk))
  
  function putASKhtml( ShowAsk ){
   divBELLOW.innerHTML = `<p>${ShowAsk}</p>`
  }
  console.log("\n\n executado função CreateElementP\n--\n")
}