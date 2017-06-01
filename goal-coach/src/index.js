import React from 'react';
import ReactDOM from 'react-dom';
import { firebaseApp } from './firebase';
import App from './components/App';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import mainReducer from './reducers'
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';

firebaseApp.auth().onAuthStateChanged(user => {
  if (user){
    console.log('User has signed in ', user);
    browserHistory.push('/app');
  } else {
    console.log('User still not signed in.');
    browserHistory.replace('/signin');
  }
})

const store = createStore(mainReducer);

ReactDOM.render(
  <Provider>
    <Router path="/" history={browserHistory}>
      <Route path="/app" component={App}></Route>
      <Route path="/signin" component={SignIn}></Route>
      <Route path="/signup" component={SignUp}></Route>
    </Router>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
