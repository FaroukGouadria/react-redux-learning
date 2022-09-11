import './App.css'
import React from 'react'  
import Login from './components/Login';
import Profile from './components/Profile';

import {store} from './redux/store';
import {Provider} from 'react-redux'; 


function App() {

  return (
    <Provider store={store}>
    <div className="App">   
        <h1 style={{Textcolor:'black',fontSize:30}}>WELCOME</h1>
      <h1 style={{ Textcolor: 'black', fontSize: 30 }}>TO</h1>
      <h1 style={{ Textcolor: 'black', fontSize: 30 }}>SHOPIUM</h1>

      <Profile/>
      <Login/>
    </div>
    </Provider>
  );
}


export default App;
