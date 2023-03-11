import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import data from './data';
import Card from './Components/Card';


function App() {
  const cards = data.map(item=>{
    return(
      <Card
        key={item.id}
        item={item}
       />
  
    )
  
  })

  return (
    <div className="App">
      <Navbar />
      <section >
        {cards}
      </section>

    </div>
  );
}

export default App;
