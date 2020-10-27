import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import authReducer from './rootReducer/rootReducer';
import { reducer as formReducer } from 'redux-form';
import reduxThunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import { persistReducer } from 'redux-persist';
//Get localstorage on window browser--session storage also availiable:
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    //key = point of storage inside reducer--start storing at root.
    key: 'root',
    storage,
    whitelist: ['auth']
}

//Creating Enhancers:

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//RootReducer:
const rootReducer = combineReducers({
    auth: authReducer,
    form: formReducer,
});

//Persisting formReducer:
const persistRootReducer = persistReducer(persistConfig, rootReducer);

//Creating store with reducers and redux extension
export const store = createStore(persistRootReducer, composeEnhancers(applyMiddleware(reduxThunk)));

//Persisted Version of store:
export const persistor = persistStore(store);

export default { store, persistor };