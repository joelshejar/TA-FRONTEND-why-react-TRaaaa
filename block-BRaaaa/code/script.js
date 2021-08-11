let movies = []
let input = document.querySelector('input')
let ul = document.querySelector('ul')
let button = document.querySelector('button')
input.addEventListener('keyup', (event)=>{
    if(event.keyCode===13){
        movies.push({
            name: event.target.value,
            watched:false
        })
        console.log(movies)
        createUI()
        input.value = ''
    }
})

function watched(event){
    let id = event.target.dataset.id
    movies[id].watched = !movies[id].watched
    createUI()
}

function createUI(){
    ul.innerHTML = ''
    movies.forEach((elm,i)=>{
        let li = document.createElement('li')
        let button = document.createElement('button')
        button.setAttribute("data-id", i)
        console.log(elm.name)
        li.innerText = elm.name
        
        if(elm.watched === true){
            button.innerText = 'Watched'
        } else {
            button.innerText = 'Watch Later'
        }
        li.append(button)
        ul.append(li)
        button.addEventListener('click', watched)
    })
}

















