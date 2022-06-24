# Implementar e Iniciar DB con MongoDB, Mongoose y express

## Instalamos MongoDB, Mongoose, express, morgan y nodemon

´´´js
npm i express mongoose morgan

npm i nodemon -D
´´´
## Implementamos express en el src/index.js

´´´js
const express = require('express');
const app = express();
<!-- const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors'); -->
´´´
## Modificamos scripts en packaje.json
´´´js
"scripts": {
    "start": "nodemon index.js",
    "dev": "nodemon index.js"
}
´´´

# Redux OMDB APP

## Instalar React Redux
```js
npm install redux react-redux --save
//Si se van a hacer consultas alguna API hace falta installar
npm install --save redux-thunk
```

## Crear las carpetas y archivos
  - redux
    - store
      -index.js
    - reducer
      -index.js
    - actions
      -index.js
  
  
  
## Combine reducer el reducer
### Crear archivo index.js en reducers

```js
import { combineReducers } from "redux";

const rootReducers = combineReducers({
    //user: userReducer,
});

export default rootReducers;
```
  
## Crear store
### En carpeta Store, un index

```js
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

//Dev tools
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

//Store
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;
```
  
## Conectamos la store a la app
## En archivo index de react

```js
import store from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
```

## Reduccer
### En la carpeta reducer, agregar cada reducer en archivos nuevos

```js
// Sintaxis
const initialState = {
    moviesFavorite: JSON.parse(localStorage.getItem('movies')) || [],
    moviesLoaded: [],
    movieDetail: {}
  };

function <nombre-reducer>Reducer(state = initialState, action) {
  if (action.type === "ADD_MOVIE_FAVORITE") {
      return {
        ...state,
        movies: state.movies.concat(action.payload)
      }
  }
  if (action.type === "GET_MOVIES") {
      return {
        ...state,
        moviesLoaded: action.payload.Search
      };
  }
  return state;
}

export default rootReducer;
```
## Actions

### Sintaxis actions


```js
export function addMovieFavorite(payload) {
  return { type: "ADD_MOVIE_FAVORITE", payload };
}

export function getMovies(titulo) {
  return function(dispatch) {
    return fetch("http://www.omdbapi.com/?apikey=20dac387&s=" + titulo)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "GET_MOVIES", payload: json });
      });
  };
}
```

/*********************************/
# REACT ROUTER DOM
## Instalar React Redux
```js
$ npm install react-router-dom --save
```
## Wrapear en el index.js BrowserRouter

### Importar BrowserRouter y envolver app

```js
//Ejemplo usando redux
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);
```
## Crear un componente router
  
```js
import { Routes, Route, Link } from 'react-router-dom';
import Comanda from '../Comanda';
import Products from '../Products';

const AppRouter = () => {
    return(
        <div>
            <h1>AppRouter</h1>
            <Routes>
                <Route path="/" element={<Products/>} />
                <Route path="/" element={<Comanda/>} />
            </Routes>
        </div>
    )
}
export default AppRouter;
```
  
## Crear store
### En carpeta Store, un index

```js
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

//Dev tools
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

//Store
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;
```
  
## Conectamos la store a la app
## En archivo index de react

```js
import store from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
```

## Reduccer
### En la carpeta reducer, agregar cada reducer en archivos nuevos

```js
// Sintaxis
const initialState = {
    moviesFavorite: JSON.parse(localStorage.getItem('movies')) || [],
    moviesLoaded: [],
    movieDetail: {}
  };

function <nombre-reducer>Reducer(state = initialState, action) {
  if (action.type === "ADD_MOVIE_FAVORITE") {
      return {
        ...state,
        movies: state.movies.concat(action.payload)
      }
  }
  if (action.type === "GET_MOVIES") {
      return {
        ...state,
        moviesLoaded: action.payload.Search
      };
  }
  return state;
}

export default rootReducer;
```
## Actions

### Sintaxis actions


```js
export function addMovieFavorite(payload) {
  return { type: "ADD_MOVIE_FAVORITE", payload };
}

export function getMovies(titulo) {
  return function(dispatch) {
    return fetch("http://www.omdbapi.com/?apikey=20dac387&s=" + titulo)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "GET_MOVIES", payload: json });
      });
  };
}
```