import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

//Components
import App from './components/App';
import store from '../src/redux/store';

//Normalize CSS
import 'normalize.css';

render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
);

