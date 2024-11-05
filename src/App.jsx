import Card from "./components/card/Card";
import Form from './components/form/Form';
import './App.css'
import { goku } from './data/goku';


function App() {
 

  return (
 <main>
  <h1>Formularios</h1>
  <div>
    <Form/>
  </div>
  <section>
    {
      
      goku.map(({id, name, gender, image, race})=>(
    
        <Card
        id ={id}
        name = {name}
        image = {image}
        gender = {gender}
        race = {race}
        />
       
      ))
    }
  </section>
  

 </main>
  )
}

export default App
