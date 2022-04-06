import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About_Us from './components/pages/About_Us'
import Blogs from './components/pages/Blogs';
import Gallery from './components/pages/Gallery';
import SignUp from './components/pages/SignUp';
import MapsApi from './components/pages/MapsApi';
import Alps from './components/pages/Alps';
import Maldives from './components/pages/Maldives';
import Vietnam from './components/pages/Vietnam';
import Safari from './components/pages/Safari';
import Monuments from './components/pages/Monuments'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about-us' component={About_Us} />
          <Route path='/blogs' component={Blogs} />
          <Route path='/gallery' component={Gallery} />
          <Route path='/maps-api' component={MapsApi} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/alps-mountain' component={Alps} />
          <Route path='/maldives' component={Maldives} />
          <Route path='/vietnam' component={Vietnam} />
          <Route path='/safari' component={Safari} />
          <Route path='/monuments' component={Monuments} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
