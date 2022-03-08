import React from 'react';
import './App.css';
import Header from './components/header/Header';
import SideBar from './components/sideBar/SideBar';
import Video from './components/video/Video'
import {Provider} from 'react-redux'
import store from './store';
function App() {
  return (
    <>
    <div className="App">
    <Provider store={store}>
    <Header/>
      <div className='contentWrapper'>
        <div className='videoBox'>
          <Video/>
        </div>
        <SideBar/>
      </div>
      </Provider>
    </div>
    
    </>
  );
}

export default App;
