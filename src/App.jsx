import { useState } from 'react'
import { food } from './food'
import Gif from './AF002142_01.gif'
import './App.css';
// import Raccoon from './raccoon.js'
import './hangry.css'

function App() {
  const [content, setContent] = useState('start')
  const [main, setMain] = useState('')
  const [type, setType] = useState('')
  return (
    <div className="App">
      <header className="App-header">

        <div className='banner' hidden={content === 'start'} >
          <button className='home-button' onClick={() => setContent('start')} ><i class="fas fa-home"></i></button>
        </div>

        {/* HOME */}
        <div className='surprise' hidden={content !== 'start'}>
          <div className='logo'>
            <h2 classname='title'>HANGRY</h2>
            <h2 className='coona'>Coona</h2>
          </div>
          <img src={Gif} />
          <div className='page-content'>
            <div className='buttons'>
              <button className='surprise-button' onClick={() => setContent('surprise')}><i class="fas fa-paw"></i><span className='button-text'>Surprise me</span></button>
              <button className='search-button' onClick={() => setContent('search')}><i class="fas fa-search"></i><span className='button-text'>Search</span></button>
            </div>
          </div>

        </div>

        {/* SURPRISE */}
        <div className='surprise' hidden={content !== 'surprise'}>
          <h2>Surprise!!!</h2>
          <button onClick={() => setContent('start')}>Home</button>
          <button onClick={() => setContent('search')}>Search</button>
        </div>

        {/* SEARCH  */}
        <div className='search' hidden={content !== 'search'}>
          <section>
            <h3>Main ingredient</h3>
            <button onClick={() => setMain('beef')} className='search-filter'>Beef</button>
            <button onClick={() => setMain('chicken')} className='search-filter'>Chicken</button>
            <button onClick={() => setMain('sausage')} className='search-filter'>Sausage</button>
            <button onClick={() => setMain('begetable')} className='search-filter'>Vegetable</button>
            <button onClick={() => setMain('bacon')} className='search-filter'>Bacon</button>
            <button onClick={() => setMain('fish')} className='search-filter'>Fish</button>
            <button onClick={() => setMain('ham')} className='search-filter'>Ham</button>
            <button onClick={() => setMain('cheese')} className='search-filter'>Cheese</button>
          </section>
          <section>
            <h3>Type</h3>
            <button onClick={() => setType('baked goods')} className='search-filter'>Baked goods</button>
            <button onClick={() => setType('cozy')} className='search-filter'>Cozy</button>
            <button onClick={() => setType('oven dishes')} className='search-filter'>Oven dishes</button>
            <button onClick={() => setType('pan mix')} className='search-filter'>Pan mix</button>
            <button onClick={() => setType('pasta')} className='search-filter'>Pasta</button>
            <button onClick={() => setType('pie')} className='search-filter'>Pie</button>
            <button onClick={() => setType('rice')} className='search-filter'>Rice</button>
            <button onClick={() => setType('salad')} className='search-filter'>Salad</button>
            <button onClick={() => setType('sides')} className='search-filter'>Sides</button>
            <button onClick={() => setType('soup')} className='search-filter'>Soup</button>
            <button onClick={() => setType('steak')} className='search-filter'>Steak</button>
            <button onClick={() => setType('street food')} className='search-filter'>Street food</button>
          </section>
          <section>
            {food.map((item) => (
              (item.main == main && item.type == type && <p>{item.name}</p>)
            ))}
          </section>
        </div>
      </header>
    </div >
  );
}

export default App;
