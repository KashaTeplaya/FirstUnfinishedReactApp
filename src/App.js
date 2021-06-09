import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import Diologs from './components/Diologs/Diologs';
import News from './components/News/News';
import { Route, BrowserRouter } from 'react-router-dom';

const App = (props) => {
 
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Navigation/>
        <div className="app-wrapper-content">
            <Route path='/dialogs' render={()=> <Diologs dialogData={props.appState.dialogPage.dialogData} messageData={props.appState.dialogPage.messageData} imgData={props.appState.dialogPage.imgData}/>}/>
            <Route path='/profile' render={()=><Profile postData={props.appState.profilePage.postData} addPost={props.addPost}/>}/>
            <Route path='/news' component={News}/>
            {/* <Diologs/> */}
            {/* <Profile/> */}
        </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
