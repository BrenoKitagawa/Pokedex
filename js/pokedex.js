
const pokemonName=document.querySelector('.name')

const pokemonInfo=document.querySelector('.info')

const pokemonImg=document.querySelector('#img')

const next = document.getElementById('next')

const back = document.getElementById('back')

const up = document.getElementById('up')

const down = document.getElementById('down')

const pesquisar = document.getElementById('ButtonPesquisar')

const search = document.getElementById('search')

const ligar = document.getElementById('ligar')

const reset = document.getElementById('reset')

const shiny = document.getElementById('shiny')

const normal= document.getElementById('normal')

const shinyLabel = document.getElementById('shinyLabel')






let count = 0

shiny.addEventListener('click',()=>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${count == 0 ? 1 : count }`)
    .then(res=>res.json())
    .then(data=>{

    addPokemon(data.id,data.name,data.sprites.front_shiny)})
})

normal.addEventListener('click',()=>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${count == 0 ? 1 : count }`)
    .then(res=>res.json())
    .then(data=>{

    addPokemon(data.id,data.name,data.sprites.front_default)})
})

reset.addEventListener('click',()=>{
    count= 1
    fetch(`https://pokeapi.co/api/v2/pokemon/${count == 0 ? 1 : count }`)
    .then(res=>res.json())
    .then(data=>{

    addPokemon(data.id,data.name,data.sprites.front_default)})
})

ligar.addEventListener('click',()=>{
    count= 1
    fetch(`https://pokeapi.co/api/v2/pokemon/${count == 0 ? 1 : count }`)
    .then(res=>res.json())
    .then(data=>{

    addPokemon(data.id,data.name,data.sprites.front_default)
})
})

next.addEventListener('click',()=>{
    count ++
    fetch(`https://pokeapi.co/api/v2/pokemon/${count == 0 ? 1 : count }`)
    .then(res=>res.json())
    .then(data=>{

    addPokemon(data.id,data.name,data.sprites.front_default)
})

if(count >= 1024){
    count = 0
}

})

back.addEventListener('click',()=>{
    count --
    fetch(`https://pokeapi.co/api/v2/pokemon/${count}`).then(res=>res.json()).then(data=>{

    addPokemon(data.id,data.name,data.sprites.front_default)
})


       if(count <= 1){
           count = 1025
       }
   
   })


   up.addEventListener('click',()=>{

    fetch(`https://pokeapi.co/api/v2/pokemon/${count}`)
    .then(res=>res.json())
    .then(data=>{
        if(shiny.checked != true){
    addPokemon(data.id,data.name,data.sprites.back_default !=null? data.sprites.back_default: data.sprites.front_default  )}
    else{
        addPokemon(data.id,data.name,data.sprites.back_shiny  !=null? data.sprites.back_shiny : data.sprites.front_default  )
    }
})

   })

   down.addEventListener('click',()=>{

    fetch(`https://pokeapi.co/api/v2/pokemon/${count}`)
    .then(res=>res.json())
    .then(data=>{
        if(shiny.checked != true){
    addPokemon(data.id,data.name,data.sprites.front_default )
        }else{
            addPokemon(data.id,data.name,data.sprites.front_shiny !=null ? data.sprites.front_shiny  : data.sprites.front_shiny  )
        }
})

   })



search.addEventListener('input', ()=>{
    if(search.value != " "){
        pesquisar.disabled=false
    }
})

   pesquisar.addEventListener('click',()=>{

      
    fetch(`https://pokeapi.co/api/v2/pokemon/${search.value.toLowerCase()}`)
    .then(res=>res.json())
    .then(data=>{

        count = data.id
    addPokemon(data.id,data.name,data.sprites.front_default )
})



   })





function addPokemon(id,nome,img){
    pokemonInfo.innerHTML="id: "+id
    pokemonName.innerHTML=nome
    pokemonImg.src=img

}

window.addEventListener('resize',()=>{

    if(window.innerWidth <= 550){
        const h1 = document.createElement('h1')
        h1.innerHTML= 'Pokedex só podera ser utilizada em telas a cima de 600px'
        h1.id=('erro')
        document.body.appendChild(h1)
    }else{

        if(document.getElementById('erro')){
       let h2= document.getElementById('erro')
       h2.remove()
        }else{

        }

       
    }
})
