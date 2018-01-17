import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import {Route, BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './components/App';
import Video from './components/Video';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <Provider store = {store}>
        <div>
        <Route exact path='/' component={App} />
        <Route path='/movies/:id' component={Video} />
        </div>
        </Provider>
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
