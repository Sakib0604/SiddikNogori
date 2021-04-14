import React from 'react';

import {BrowserRouter as Router,Route} from 'react-router-dom'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import DetailsPage from './screens/articles/detailpage';
import NavBar from './components/navbar';
import Articles from './screens/articles/articles';
import About from './screens/about/about'
import AboutDetails from './screens/about/aboutdetails'
import Event from './screens/events/events'
import AudioBook from './screens/audiobook/audiobooks'
import EBook from './screens/ebooks/ebooks';
import GroupsMember from './screens/groupsmember/groupsmember';
import Group from './screens/groupsmember/group';



function App() {
  return (
    <Router>
      <NavBar/>
      <Route path='/SiddikNogori' component={Articles} exact/>
      <Route path='/details/:title' component={DetailsPage} />

      <Route path='/about' component={About} />
      <Route path='/aboutdetails/:title' component={AboutDetails} />

      <Route path='/event' component={Event} />

      <Route path='/group-member' component={GroupsMember} />
      <Route path='/group-name/:id' component={Group} />
      
      
      <Route path='/audio-book' component={AudioBook} />

      <Route path='/e-book' component={EBook} />
    </Router>
  );
}

export default App;