import { useState } from 'react'
import logo from './logo.svg';
import './App.css';
// import Raccoon from './raccoon.js'
import './hangry.css'

function App() {
  const [content, setContent] = useState('start')
  return (
    <div className="App">
      <header className="App-header">

        <div hidden={content === 'start'} >
          <button onClick={() => setContent('start')} ><i class="fas fa-home"></i></button>
        </div>

        {/* HOME */}
        <div className='surprise' hidden={content !== 'start'}>
          <div className='logo'>
            <h2 classname='title'>HANGRY</h2>
            <h2 className='coona'>Coona</h2>
          </div>

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
          <>
            <h2>Search</h2>
            <div>
              <h3>Main ingredient</h3>
              <button className='main-ingredient'>Beef</button>
              <button className='main-ingredient'>Chicken</button>
              <button className='main-ingredient'>Sausage</button>
              <button className='main-ingredient'>Vegetable</button>
              <button className='main-ingredient'>Bacon</button>
              <button className='main-ingredient'>Fish</button>
              <button className='main-ingredient'>Ham</button>
              <button className='main-ingredient'>Cheese</button>
            </div>
          </>
          <>
            <h3>Type</h3>
            <div>
              <button className='type'>Baked goods</button>
              <button className='type'>Cozy</button>
              <button className='type'>Oven dishes</button>
              <button className='type one'>Pan mix</button>
              <button className='type'>Pasta</button>
              <button className='type two'>Pie</button>
              <button className='type'>Rice</button>
              <button className='type'>Salad</button>
              <button className='type'>Sides</button>
              <button className='type'>Soup</button>
              <button className='type'>Steak</button>
            </div>
          </>
          {/* 
          <button onClick={() => setContent('surprise')}>Surprise</button> */}
        </div>

      </header>
    </div >
  );
}

export default App;
