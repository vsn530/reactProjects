//Install -->Import-->Use
/* import validator from 'validator';
console.log(validator.isEmail('test'));
console.log(validator.isEmail('test@gmail.com')); */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Route , Switch , Link, NavLink} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage=()=>(
    <div>
        This is from my dashboard component
    </div>
);

const AddExpensePage=()=>(
    <div>
        This is from my add expense component
    </div>
);

const EditExpensePage=()=>(
    <div>
        This is from my Edit expense component
    </div>
);

const HelpPage=()=>(
    <div>
        This is from my Help component
    </div>
);

const Header =()=>(
    <header>
        <h1>Expensify</h1>
        <NavLink to="./"  activeClassName="is-active" exact={true}>Dashboard</NavLink><br/>
        <NavLink to="./create" activeClassName="is-active" >Create Expense</NavLink><br/>
        <NavLink to="./edit" activeStyle={{fontWeight:"bold"}}>Edit Expenses</NavLink><br/>
        <NavLink to="./help" activeClassName="is-active">Help</NavLink>
    </header>
)

const NotFoundPage=()=>(
    <div>
       <h1>404!--</h1> <br/>
       <Link to="./">Go Home</Link>
       
    </div>
);

const routes =(
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                <Route path="/create" component={AddExpensePage }/>
                <Route path="/edit" component={EditExpensePage }/>
                <Route path="/help" component={HelpPage }/>
                <Route  component={NotFoundPage }/>
            </Switch>
        </div>
        
    </BrowserRouter>
);



ReactDOM.render(routes,document.getElementById('app'));






