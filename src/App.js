import React from 'react';
import Header from './Header';
import './App.css';
import Chats from "./Chats"
import SwipeButtons from './SwipeButton';
import TinderCards from './TinderCards';
import ChatScreen from './ChatScreen'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">      
      {/* Header */}
      

      <Router>
       
        <Switch>
          <Route path="/chats/:person" >
            <Header backButton="/chats" />
            <ChatScreen />
          </Route>
          <Route path="/chats" >
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/" >
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
      {/* Tinder cards */}
      {/* button below tinder cards */}


      {/* Chats screen */}
      {/* Indivudual chat screen */}
    </div>
  );
}

export default App;
