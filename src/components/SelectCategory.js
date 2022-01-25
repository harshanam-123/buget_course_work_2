//import '../style/css/transaction_css/selectcategory.css';
import '../style/css/selectcategory.css';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoIosCloseCircle } from "react-icons/io";
import { MdClose } from "react-icons/md";
//import { IoIosCloseCircleOutline } from "react-icons/io";

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom' ;
import {Link} from 'react-router-dom';

import useFetch from '../usefetch';
import React, { useEffect, useState } from 'react';



const SelectCategory = (props) => {

  const { transactionlist: expenses_list, error_expenses } = useFetch('http://localhost:8000/expenses/');
  const { transactionlist: income_list, error_income } = useFetch('http://localhost:8000/income/');

  const [toggle_expense_income, set_toggle_expense_income] = useState('expense')
  const getthecategory = (title_name) =>{
    props.get_cat(title_name);
  }
    return (

        <div className="category-pop-up">
    <div className="inside-category">
    <div className="header_container">
      <div className="header-category">Select the Category</div>
      <div className="close_button"><button className='button-icon' onClick={props.close_select_category}><MdClose/></button></div>
    </div>
                <hr></hr>

    <div className="button-container-category">
    <button  
    className='select-button'
    onClick={()=>{

      set_toggle_expense_income('expense');
      console.log(toggle_expense_income);
    }}
    >  Expenses</button>

    <button 
    
    className='select-button' 
    onClick={()=>{
      set_toggle_expense_income('income');
      console.log(toggle_expense_income);
    }}

    >Income</button>
    </div>

    <div className="category-container-bottom">
    {(() => {
  switch (toggle_expense_income) {
    case 'expense':
      return  <> {expenses_list && 
        <div className="wrapper_cat">
          {expenses_list.slice().reverse().map((post_expense,index)=>{

              return (
                <button className='catagory_list_selection' onClick={()=>props.get_cat(post_expense.title)}>
                 <div className="catagory_list_selection_title">{post_expense.title}</div>   
                 <hr></hr>
                </button>
              )

          })}
        
        
          </div>
        
        }</>
    case 'income':
      return <>
      
      {income_list && 
              <div className="wrapper_cat">
                {income_list.slice().reverse().map((post_income,index)=>{

                    return (
                      <button className='catagory_list_selection' onClick={()=>props.get_cat(post_income.title)}>
                       <div className="catagory_list_selection_title">{post_income.title}</div>   
                       <hr></hr>
                      </button>
                    )

                })}
              
              
                </div>
              
              }
      
      </>
    
    default:
      return null
  }
})()}

        </div>

    </div>
    </div>
    

      );
}
 
export default SelectCategory;







/*

    <Switch>
            <Route exact path="/">
              {expenses_list && 
              <div className="wrapper_cat">
                {expenses_list.slice().reverse().map((post_expense,index)=>{

                    return (
                      <button className='catagory_list_selection' onClick={()=>props.get_cat(post_expense.title)}>
                       <div className="catagory_list_selection_title">{post_expense.title}</div>   
                       <hr></hr>
                      </button>
                    )

                })}
              
              
                </div>
              
              }
            </Route>
            <Route path="/income">
            {income_list && 
              <div className="wrapper_cat">
                {income_list.slice().reverse().map((post_income,index)=>{

                    return (
                      <button className='catagory_list_selection' onClick={()=>props.get_cat(post_income.title)}>
                       <div className="catagory_list_selection_title">{post_income.title}</div>   
                       <hr></hr>
                      </button>
                    )

                })}
              
              
                </div>
              
              }
            </Route>
        </Switch>

        */