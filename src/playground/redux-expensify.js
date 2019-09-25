import { createStore,combineReducers } from 'redux';
import uuid from 'uuid';
import { ID } from 'postcss-selector-parser';
import { visible } from 'ansi-colors';


//ADD_EXPENSE
const addExpense = (
    {
        description = '',
        note='',
        amount =0,
        createdAt=0
    }) => ({
        type:'ADD_EXPENSE',
        expense:{
            id: uuid(),
            description,
            note,
            amount,
            createdAt
        }
});

//REMOVE_EXPENSE
const removeExpense = ({id}={}) =>({
    type:'REMOVE_EXPENSE',
    id
})

//EDIT_EXPENSE
const editExpense = (id,updates)=>({
    type:'EDIT_EXPENSE',
    id,
    updates
});

//SET_TEXT_FILTER
const setTextFilter = (text='')=>({
    type:'SET_TEXT_FILTER',
    text
});

//SORT_BY_AMOUNT
const sortByAmount = (amount)=>({
    type:'SORT_BY_AMOUNT',
    amount
})

//SORT_BY_DATE
const sortByDate = (date)=>({
    type:'SORT_BY_DATE',
    date
})

//SET_START_DATE
const setStartDate = ((date = undefined)=>({
    type:'SET_START_DATE',
    date
}));

//SET_END_DATE
const setEndDate = ((date = undefined)=>({
    type:'SET_END_DATE',
    date
}));

//Expenses reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState,action)=>{
    switch(action.type){
        case 'ADD_EXPENSE':
             return [
                 ...state,
                 action.expense
             ]
        case 'REMOVE_EXPENSE':
            return state.filter(({id})=>{
                   return id !==action.id;
            })
        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                if(expense.id ===action.id){
                    return {
                        ...expense,
                         text: action.text
                    }
                }
                else{
                    return expense;
                }
            })
        default:
            return state;
    }

}

//Filters reducer

const filtersReducerDefaultState = {
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
};

const filtersReducer = ( state = filtersReducerDefaultState,action)=>{
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text:action.text
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy:action.date
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy:action.amount
                }
        case 'SET_START_DATE':
                return {
                    ...state,
                    startDate:action.date
                    }
        case 'SET_END_DATE':
                return {
                    ...state,
                    endDate:action.date
                    }
        default:
            return state;
    }

}
//timestamp
//33400, 10, -203
//get visible expenses
const getVisibleExpenses = (expenses,{text,sortBy,startDate,endDate})=>{
        return expenses.filter((expense)=>{
            const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
            const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
            const textMatch = (expense.description).toLowerCase().includes(text.toLowerCase());

            return startDateMatch && endDateMatch && textMatch;
           
        }).sort((a,b)=>{
            if(sortBy ==='date'){
                return a.createdAt < b.createdAt ? 1:-1;
            }
            if(sortBy ==='amount'){
                return a.amount < b.amount ? 1:-1;
            }
        });
}

//Store creation
const store = createStore(combineReducers({
    expenses:expensesReducer,
    filters:filtersReducer
}));

store.subscribe(()=>{
    const state = store.getState();
    const visiblexpenses = getVisibleExpenses(state.expenses,state.filters);
    console.log(visiblexpenses);
})

const expenseOne = store.dispatch(addExpense({description:'Rent',amount:100, createdAt:2000}));
const expenseTwo = store.dispatch(addExpense({description:'Coffee',amount:300,createdAt:1000}));
store.dispatch(sortByAmount('amount'));



//console.log(expenseOne);

/*store.dispatch(removeExpense({id:expenseOne.expense.id}));

store.dispatch(editExpense(expenseTwo.expense.id, {amount:500}));


store.dispatch(setTextFilter());


store.dispatch(sortByDate('DATE'));
 */

//store.dispatch(setStartDate(125));
//store.dispatch(setStartDate());
//store.dispatch(setEndDate(1000)); 
/* store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter());
store.dispatch(setTextFilter('coffee')); */



const demoState ={
    expenses:[{
        id:'fdfdfdf',
        description:'January Rent',
        note:'Final payment for that address',
        amount:54500,
        createdAt:0
    }],
    filters:{
        text:'rent',
        sortBy:'amount', //date or amount
        startDate:undefined,
        endDate:undefined
    }

};


/* const user = {
    name:'Jen',
    age:24
};
console.log({
    age:27,
    ...user,
    location:'phil',
    
}); */

//Possible actions

//SORT_BY_DATE


