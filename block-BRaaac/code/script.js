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

function elm1(type, attr = {}, ...children){
    let element = document.createElement(type)
    for(let key in attr){
        if(key.startsWith("data-")){
            element.setAttribute(key, attr[key])
        }else{
            element[key] = attr[key]
        }
    }
    children.forEach((child)=>{
        if(typeof child === "object"){
            element.append(child)
        }
        if(typeof child === "string"){
            let node = document.createTextNode(child)
            element.append(node)
        }
    })
    return element
}

function createUI(){
    ul.innerHTML = ''
    movies.forEach((elm,i)=>{
        let li=elm1('li',{},elm.name,
        elm1('button',{"data-id": i,},
        elm.watched?'Watched':'Watch Later'))
        // let li = document.createElement('li')
        // let button = document.createElement('button')
        // button.setAttribute("data-id", i)
        // console.log(elm.name)
        // li.innerText = elm.name
        
        // if(elm.watched === true){
        //     button.innerText = 'Watched'
        // } else {
        //     button.innerText = 'Watch Later'
        // }
        
        ul.append(li)
        let button = document.querySelector('button')
        button.addEventListener('click', watched)
        
    })
}
