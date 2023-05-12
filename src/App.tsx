import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header/Header';
export default class App extends Component  {
  componentDidMount(): void {
      //console.log('run')

  }

  render(): React.ReactNode {
    return (
      <div className='bg-stone-300 min-h-screen	'>
      {/* <div >
        <h1>Hello world</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
        
      </div> */}
            <Header/>
            {/* <Content/> */}
      {/* <Home/>
      <Contact/>
      <About/>
      <Counter/> */}
      </div>
    );
  }
}


// export default App;
