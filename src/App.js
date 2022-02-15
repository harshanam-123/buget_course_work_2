import { useHistory , useParams} from "react-router-dom"
import React, { useEffect, useState } from 'react';
import './App.css';
import './style/css/navigation.css';
import AddTransaction from './components/AddTransacion';
import TransactionSection from './components/transaction-section';  
import BudgetList from "./components/budgetlist";
import CategoryList from "./components/category/categorylist";
import CurrentTransaction from "./components/CurrentTransaction";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom' ;
import {Link} from 'react-router-dom';

function App() {
  // const { id } =useParams();
  const [isOpen, setIsOpen] = useState(false);

  
 
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
 
  }


  //const deletetransaction =(id) => {

   // const newtransactionlist = transactionlist.filter( list => list.id !== id) ;
    //settransactionlist(newtransactionlist);

  //}

  return (
    <Router>
    <div className="App">
      
       <div className="container-side"></div>
      
         <div className="navigation">    
           <div className="left-navigation">


           </div>
           <div className="rigth-navigation">
            
            <button className="add-transaction"onClick={togglePopup}>+ Add Transaction</button>
            <button className="add-category">+ Category</button>  

             
           </div>
         </div>
          <div className="container-heading">
          <Link to="/" className='inside-link'>Budget</Link>
            <Link to="/transaction" className='inside-link' >Transaction</Link> 
            <Link to="/category" className='inside-link' >Category List</Link> 
          </div>
         
           {isOpen && < AddTransaction handleClose={togglePopup}  />}

         <div className="container">

         <Switch>
            <Route exact path="/">
              <BudgetList/>
            </Route>
            <Route path="/transaction">
              < CurrentTransaction/>
            </Route>
            <Route path="/category">
              < CategoryList/>
            </Route>
        </Switch>

         </div>
    </div>
    </Router>
  );
}

export default App;

//git push https://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@github.com/harshanam-123/buget_course_work_2.git
//npx json-server --watch data/data.json --port 8000

//npm install react-router-dom@5
//The ?. is called Elvis Operator (optional chaining) in JavaScript.

/*

let nestedProp = obj.first?.second;

JavaScript knows to implicitly check to be sure obj.first is not null 
or undefined before attempting to access obj.first.second. If obj.first
 is null or undefined, the expression automatically short-circuits, returning
  undefined.

similar to -

let temp = obj.first;
let nestedProp = ((temp === null || temp === undefined) ? undefined : temp.second);


It is commonly used when you want to add a new item to a local data store, or display 
all stored items plus a new addition. A very simple version of this kind of action could look like so:

let numberStore = [0, 1, 2];
let newNumber = 12;
numberStore = [...numberStore, newNumber];

*/
