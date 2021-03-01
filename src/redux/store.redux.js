import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';


// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

import dataReducer from './reducers/data.reducer';

const initialState = {};

const middleware = [thunk];

const reducer = combineReducers({
    data: dataReducer
});

// const persistConfig = {
//     key: 'root',
//     storage: storage,
//     whitelist: ['data'] // which reducer want to store
// };

// const pReducer = persistReducer(persistConfig, reducer);


const store = createStore(
    reducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

// const persistor = persistStore(store);

// export { store, persistor };
export default store;