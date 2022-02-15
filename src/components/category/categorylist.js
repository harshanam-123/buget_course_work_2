import AddNewCategory from "./AddNewCategory";
import useFetch from "../../usefetch";
import React, { useEffect, useState } from 'react';
import TransactionSection from "../transaction-section";
import "../../style/css/category_css/category.css"
import ExpenseList_Cat from "./ExpenseList_Cat";
import IncomeList_Cat from "./IncomeList_Cat";

const CategoryList = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [toggle_income_expense, set_toggle_income_expense] = useState('expense')
    const { transactionlist: expenses_list, error_expenses } = useFetch('http://localhost:8000/expenses/');
    const { transactionlist: income_list, error_income } = useFetch('http://localhost:8000/income/');
    
    console.log(expenses_list);
    console.log(income_list);

    

    const deletecategory=(id)=>{
        console.log(id) ;
         fetch('http://localhost:8000/income/'+ id,{
           method:'DELETE'
         }).then(()=>{
     
           window.location.reload();
         }) .catch(err => {
           console.log(err);
      
         })
     
     }

    

    const togglePopup_add_category = () => {
      
        setIsOpen(!isOpen);
       
    }
    return (

        <div className="inside-category-list">
                 {isOpen && < AddNewCategory handleClose={togglePopup_add_category}  />}
                <div className="add_bud_wrapper">
                 <button className="add-budget-button"onClick={togglePopup_add_category}>+ Add a Category</button>
                 
                 </div>
                 <hr></hr>
                 <div className="select_income_expense">
                    <button className="expense_button" onClick={()=>{set_toggle_income_expense('expense')}}>- Expenses</button>
                    <button className="income_button" onClick={()=>{set_toggle_income_expense('income')}}>+ Income</button>

                 </div>
                {error_expenses &&  <div className="container-1">
              {error_expenses}
              </div>}
          {expenses_list && <div className="container-cat-list">
           
          {(() => {
                            switch (toggle_income_expense) {
                              case 'expense':
                                return <>
                                { expenses_list &&  <ExpenseList_Cat expense_list = {expenses_list} />}
                                </>
                              case 'income':
                                return <>
                                 { income_list &&  <IncomeList_Cat income_list = {income_list} />}
                                </>
                              default:
                                return null
                            }
                          })()}



       </div> }


        
        </div>

      );
}
 
export default CategoryList;


/*

  {transactionlist.slice().reverse().map(post=>{
            return (
              <div className="container-bottom" id={post.id}>

                  <TransactionSection 
                  id = {post.id} 
                  title ={post.title}
                  cost ={post.cost}
                  date ={post.date}
                  category ={post.category}
                  budget_name ={post.budget_name}
                  deletesection ={deletecategory}
                  
                  /> 
                </div>

            )

         })}



         */