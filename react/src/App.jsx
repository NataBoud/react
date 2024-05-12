import { useState } from "react"

const title = 'Bonjour'
const style = { color: 'red', backgroundColor: 'black' }
const showTitle = false

const todos  = [
  'Presenter react',
  'Presenter le JSX',
  'Creer des composant'
]

function App() {

const [count, setCount] = useState(0)

const increment = () => {
  // setCount(count + 1)
  setCount((c) => c + 1)
  setCount((o) => o + 1)
}

const [person, setPerson] = useState({
  firstName: 'John',
  lastName: 'Doe',
  age: 18
})

  const incrementAge = () => {
    setPerson({...person, age: person.age + 1})
  }

  const [firstname, setFirstname] = useState('John Doe')

const handleChange = (e) => {
  setFirstname(e.target.value)
}

const reset = () => {
  setFirstname('')
}

console.log('render');

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target);
    console.log(formData.get('firstname'));
  }

  const [value, setValue] = useState('')
  const handleChange2 = (e) => {
      setValue(e.target.value)
  }

  const [checked, setChecked] = useState('true')
  const toggleChack = () => {
    setChecked(!checked)
  }


  return <><form onSubmit={handleSubmit}>
    <input type="text" name="firstname" defaultValue='pardefault'/> 

    <textarea value={value} onChange={handleChange2}/>

    <input type="checkbox" checked={checked} onChange={toggleChack}/>
   <button disabled={!checked}>Envoyer</button>
  </form>
    
    {/* <p>Compteur : {count}</p> 
    <p>Age de : {person.firstName} : {person.age}</p>
    <button onClick={increment}>Incrementer</button>
    <button onClick={incrementAge}>Incrementer age</button>

    <input type="text" name="firstname" value={firstname} onChange={handleChange}/>
    {firstname}
    <button onClick={reset} type="button">Reset</button> */}
  </>

}



 {/* <Title color="blue" >Mon composant</Title>
    {
        showTitle ? 
        <h1 id="title" className="title" style={style}>{title}</h1> : <p>Demo</p>
    }
    <input type="text" />
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem unde iure voluptatem ipsam minima sed nisi sint ex odit dolorem. Quia similique blanditiis dicta aut quaerat nesciunt dolore ab fugiat.
    </p>

    <ul>
      {todos.map(todo => (<li key={todo}>{todo}</li>))}
    </ul> */}
// function Title ({color, children, hidden}) {
//   if (hidden) {
//     return null
//   }
//   console.log(hidden);
//   return <h1 style={{ color: color }}>{children}</h1>
// }

export default App
