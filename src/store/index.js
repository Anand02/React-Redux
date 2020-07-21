import { createStore } from 'redux';
import rootReducer from '../reducers/index';
import { addArticle } from '../action';

 
const store  = createStore(rootReducer)
console.log("store===>",store.getState())

store.subscribe(() => console.log(store.getState()))
store.dispatch( addArticle({ title:'Anand' , id: 1}))


console.log("state updatestore===>",store.getState())

export default store;