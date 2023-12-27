
import './App.css'
import Card from './componets/Card'

function App() {

  let myobj = {
    username : "Sumit",
    age : 18
  }

  let newArry = [1, 2, 3]
  

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
     <Card username="chaiaurcode"  btnText="click me"/>
     <Card username="Sumit" />
    
    </>
  )
}

export default App
