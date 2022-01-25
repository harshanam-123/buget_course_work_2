import { AiFillContainer } from "react-icons/ai";
import useFetch from "../usefetch";
import React, { useEffect, useState } from 'react';



const ExpenseList = (props) => {
  
                    
    const [budget_per_cost_expense, set_budget_cost_usestate_expense] = useState(null);
   
    const [expense_cat_list, set_expense_cat_list] = useState(props.expense_list_other); //update the list og budget
    
   
    const set_budget_cost_expense = (e, id_from_onchange , name_of_category) => { 
         const { value } = e.target;
        // console.log(expenses_list);
        const newlist = expense_cat_list.map((item,index)=>
        {

            if(parseInt(item.id) === id_from_onchange ){
                console.log('yesin')
             const updateitem ={...item ,allocation:value };
             return updateitem ;
            }
             return item ;
        }
        ); 
        set_expense_cat_list(newlist);
        props.status_update_expense(newlist);

        
     }; 

   
    return ( 

        <div className="inside-income-list">
        
            {expense_cat_list && <div className="add-budget-below-container">
                {expense_cat_list.slice().reverse().map((post ,index_main) => {
                    return (
                        <>
                            <div className="input_budget-container" id={post.id}>
                                <label className='label-ee' for='re-1'>{post.title} :</label>
                                <input className='input-number'
                                type="number" id='re-1' 
                                style={{ width: '30%' }} 
                                value= {post.allocation}
                                onChange={(e) => set_budget_cost_expense(e, post.id , post.title)}
                                
                                
                                /> <br />
                            </div>
                        </>
                    );

                })}


            </div>}

                               
            
        </div>
     );
}
 
export default ExpenseList;