function handleClick(event){
    alert(`Hello React Event`)
}
function handleClick1(event){
    alert(`To learn React use https://reactjs.org`)
    alert(`React and ReactDOM works together`)
    alert(`Babel helps in writing JSX`)
}
function handleClick2(name){
    alert(`Hello ${name}`)
}

function App(props){
    return (
        <>
        <button onClick={handleClick}>Click Me</button>
        <button onClick = {handleClick1}>How can I help you</button>
        <button onClick={handleClick2('Arya')}>Arya</button>
        <button onClick={handleClick2('John')}>John</button>
        <button onClick={handleClick2('Bran')}>Bran</button>
        </>
    )
}

export default App