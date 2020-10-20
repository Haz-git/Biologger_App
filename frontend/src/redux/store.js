import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import authReducer from './rootReducer/rootReducer';
import { reducer as formReducer } from 'redux-form';
import reduxThunk from 'redux-thunk';

//Creating Enhancers:

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//RootReducer:
const rootReducer = combineReducers({
    auth: authReducer,
    form: formReducer,
});

//Creating store with reducers and redux extension
export default createStore(rootReducer, composeEnhancers(applyMiddleware(reduxThunk)));