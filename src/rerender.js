import ReactDOM from 'react-dom'
import React from 'react'
import App from './App.js'
import { addPost } from './Redux/state.js';

export let rerender = (state)=>{
    ReactDOM.render(
        <React.StrictMode>
          <App appState = {state} addPost = {addPost}/>
        </React.StrictMode>,
        document.getElementById('root')
      );
}