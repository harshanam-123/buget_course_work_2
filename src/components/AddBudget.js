
import '../style/css/addbudget.css'
import React, { useEffect, useState } from 'react';
import useFetch from '../usefetch';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom' ;
import {Link} from 'react-router-dom';
import { MdClose } from "react-icons/md";
import IncomeList from './incomelist';
import ExpenseList from './expenselist';



  const AddBudget =(props)=> {
    
    const [toggle_income_expense_for_budget, set_toggle_income_expense_for_budget] = useState('expense')
    const [budget_title, setbudgettitle] = useState('');
    const [expense_cat_list, set_expense_cat_list] = useState(props.expense_down);
    const [income_cat_list, set_income_cat_list] = useState(props.income_down);
    const[addingpending , setpending] = useState(false);
    
     const update_expense_list =(list)=>{
        set_expense_cat_list(list) 
     }

     const update_income_list =(list)=>{
        set_income_cat_list(list) 
     }
    
    const haddlebudgetsubmit = (e) => {
             
              console.log(income_cat_list);
              console.log(expense_cat_list);
              let created_date = new Date().toLocaleString();
             
              e.preventDefault();
              const blog = {title:budget_title , created_date , income_cat_list , expense_cat_list} ;
              console.log(blog);
      
              fetch('http://localhost:8000/budget' ,{
      
              method : 'POST' ,
              headers : {"Content-Type":"application/json"},
              body :JSON.stringify(blog)
              }).then(()=>{
                  console.log('new blog added') ;
                  setpending(false);
                  window.location.reload();
                 // props.handleClose();
                 props.close_budget_add();
                  
              })
              
    };


    return (
        <Router>
          <form  className='inside_add_budget'  onSubmit={haddlebudgetsubmit}>
                <div className="inside-add-budget">
                    <div className="header-add-budget">
                        <div className="header-budget">Add Budget</div>
                        <div className="close_button_budget "><button className='button-icon' onClick={props.close_budget_add}><MdClose /></button></div>
                    </div>
                    <hr style={{ height: '2px', backgroundColor: 'black' }}></hr>

                    <div className="add-budget-middle-container">
                        <title>Budget Name :</title>
                        <input
                            type="text"
                            className="input-title-budget"
                            required
                            placeholder='Enter a name for budget....'
                            value={budget_title}
                            onChange={(e) => setbudgettitle(e.target.value)} 
                            
                            />
                    </div>
                    <title style={{ paddingBottom: '20px', paddingTop: '20px' }}> Enter the Estimated Budget for Each Category in Elk:</title>

                    <div className="button-container-category">
                        <button 
                         className='select-button'
                         type='button'
                         onClick = {()=> {
                            set_toggle_income_expense_for_budget('expense');
                         }}
                         >  Expenses</button>
                        <button 
                         className='select-button'
                         type='button'
                         onClick = {()=> {
                            set_toggle_income_expense_for_budget('income');
                         }}
                         
                         >Income</button>
                    
                    </div>


                    <div className="budget-container-bottom">
                    {(() => {
                            switch (toggle_income_expense_for_budget) {
                              case 'expense':
                                return <>
                                { expense_cat_list &&  <ExpenseList expense_list_other = {expense_cat_list} status_update_expense = {update_expense_list}/>}
                                </>
                              case 'income':
                                return <>
                                 { income_cat_list &&  <IncomeList income_list_other = {income_cat_list} status_update_income = {update_income_list}/>}
                                </>
                              default:
                                return null
                            }
                          })()}

                    </div>



                    <div className="button-submit">

                    {!addingpending && <button className="submit-for-budget" type="submit">Add</button>}
                    {addingpending && <button  disabled className="submit-for-budget" type="submit">Adding..</button>}
                    </div>

                 
                </div>

            </form>
        </Router>


    );
}
 
export default AddBudget;



/*


                  <Switch>
                           
                            <Route path="/income">

                                <div className="test">
                                    {income_list && <div className="add-budget-below-container">
                                        {income_list.slice().reverse().map((post1, index) => {
                                            return (
                                                <>
                                                    <div className="input_budget-container" id={post1.id}>
                                                        <label className='label-ee' for='re-2'>{post1.title} :</label>
                                                        <input className='input-number'
                                                            type="number"
                                                            id='re-2'
                                                            style={{ width: '30%' }}
                                                             value={income_cat_list.id}
                                                              onChange={(e) => set_budget_cost_income(e, post1.id)}
                                                            /> <br />
                                                    </div>
                                                </>
                                            );

                                        })}


                                    </div>}

                                </div>
                            </Route>
                            <Route exact path ="/">

                            { expense_cat_list &&  <IncomeList expense_list_other = {expense_cat_list} status_update = {update_expense_list}/>}
                            </Route>
                        </Switch>



                        */


                        /*

                         <Switch>
                           
                            <Route path="/income">
                            { income_cat_list &&  <IncomeList income_list_other = {income_cat_list} status_update_income = {update_income_list}/>}
                            </Route>
                            <Route exact path ="/">

                            { expense_cat_list &&  <ExpenseList expense_list_other = {expense_cat_list} status_update_expense = {update_expense_list}/>}
                            </Route>
                        </Switch>

                        */


