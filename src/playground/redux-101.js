import {createStore } from 'redux';

//Action generators - functions  that return action objects

/* const add=({a,b},c)=>{
    return a+b+c ;
}

console.log(add({a:1,b:12},100)) */

const incrementCount = ({incrementBy = 1}={})=>({
    type:'INCREMENT',
    incrementBy 
});

const decrementCount = ({decrementBy=1}={})=>({
    type:'DECREMENT',
    decrementBy
})

const setCount = ({count})=>({
    type:'SET',
    count
});

const resetCount = ()=>({
    type:'RESET'
});

const countReducer = (state ={count:0},action)=>{
    switch(action.type){
        case 'INCREMENT':
                return{
                    count:state.count + action.incrementBy
                };
        case 'DECREMENT':
                const decrementBy = typeof action.decrementBy ==='number'?action.decrementBy:1;
                return{
                    count:state.count - decrementBy
                };
        case 'RESET':
                return{
                    count:0
                };
        case 'SET':
                const count =typeof action.count ==='number'?action.count:state.count;
                return{
                    count:count
                };
        default:
            return state;

    }
}
    

const store = createStore(countReducer);

const unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
});
//unsubscribe();

store.dispatch(incrementCount({incrementBy:5}));    
    
store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy:10}));

store.dispatch(setCount({count:25}));



