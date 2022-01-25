import AddBudget from "./AddBudget";
import React, { useEffect, useState } from 'react';
import useFetch from '../usefetch';
import '../style/css/addbudget.css'
import { AiFillEdit } from 'react-icons/ai';

import { MdDelete } from 'react-icons/md';
const BudgetList = () => {

    const [open_add_budget, set_add_buget] = useState(false);
    const { transactionlist: expenses_list, error_expenses } = useFetch('http://localhost:8000/expenses/');
    const { transactionlist: income_list, error_income } = useFetch('http://localhost:8000/income/');
    const {transactionlist:budget_list, error:budget_list_fetch_error} = useFetch('http://localhost:8000/budget/' );
 
    const togglePopup_budget = () => {
      console.log(expenses_list)
      if(expenses_list ==null || income_list ==null){
        console.log("yes in ")
        alert("error occure in fetching data..Please try again");
      set_add_buget(open_add_budget) }
      
      else{
        set_add_buget(!open_add_budget)

      }
   
    }

    
  
    return ( 

        <div className="inside-budget-list">

        {open_add_budget  && < AddBudget 
        
                  close_budget_add ={togglePopup_budget} 
                  expense_down ={expenses_list} 
                  income_down ={income_list} 
                   />}

            <div className="add_bud_wrapper">
                 <button className="add-budget-button"onClick={togglePopup_budget}>+ Add Budget</button>
                 
                 </div>
               


                <div className="budegt_list_container">

                  {budget_list && budget_list.slice().reverse().map((post ,index)=>{

                      return (
                          
                          <div className="single_budegt_container">

                              <div className="bud_part_1">
                                 <div className="title_top">{post.title}</div>
                                 <div className="container_date">{post.created_date}</div>
                              
                              
                              </div>
                              <div className="bud_part_2">
                                <div className="real-income">+ Rs {gettotal_real(post.income_cat_list)}</div>
                                <div className="assumed-income">Target - Rs {gettotal_assumed(post.income_cat_list)}</div>

                              </div>
                              <div className="bud_part_3">
                                    <div className="real-expense">
                                     - Rs  {gettotal_real(post.expense_cat_list)}
                                    </div>
                                    <div className="assumed-expense">
                                    Target -Rs {gettotal_assumed(post.expense_cat_list)}
                                  </div>

                              </div>
                              <div className="bud_part_4">

                              <div className="button-wrapper">
                              <button className="view-note">View Note</button>
                              <button className="view-note-icon"><AiFillEdit /></button>
                              <button className="view-note-icon"><MdDelete/></button>
                               </div>
                              </div>

                            
                          </div>
                         



                      )



                  })}




                </div>
        </div>
     );
}
 
export default BudgetList;


function  gettotal_real(list_to_map) {

  let sum = a => a.reduce((x, y) => x + y);
  const total = sum((list_to_map.map((income ,index_income)=>{
    return Number(income.current_allocation)
  })))



return total ;

}


function  gettotal_assumed(list_to_map) {

  let sum = a => a.reduce((x, y) => x + y);
  const total = sum((list_to_map.map((income ,index_income)=>{
    return Number(income.allocation)
  })))



return total ;

}