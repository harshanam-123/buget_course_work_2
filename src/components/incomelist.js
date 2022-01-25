import { AiFillContainer } from "react-icons/ai";
import useFetch from "../usefetch";
import React, { useEffect, useState } from 'react';



const IncomeList = (props) => {

   
    
    const [income_cat_list, set_income_cat_list] = useState(props.income_list_other); //update the list og budget
    
    
    const set_budget_cost_expense = (e, id_from_onchange , name_of_category) => { 
         const { value } = e.target;
        // console.log(expenses_list);
        const newlist = income_cat_list.map((item,index)=>
        {
                 const real_id = id_from_onchange ;
            if(parseInt(item.id) === real_id ){
                console.log('yesin')
             const updateitem ={...item ,allocation:value };
             return updateitem ;
            }
             return item ;
        }
        ); 
        set_income_cat_list(newlist);
      
         console.log(income_cat_list);
         props.status_update_income(newlist);

        
     }; 

   
    return ( 

        <div className="inside-income-list">
        
            {income_cat_list && <div className="add-budget-below-container">
                {income_cat_list.slice().reverse().map((post ,index_main) => {
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
 
export default IncomeList;




/*

   const set_budget_cost_expense = (e, id , name_of_category) => {
     /*    set_budget_cost_usestate_expense((room) => room?.map((list, index) => index === id ? { ...list, id: value } : list
         )
         ); 
         
         let bool_for_availabe2 = false ;
         const { value } = e.target;
         console.log(expenses_list);
        const newlist2 = income_cat_list.map((item,index)=>
        {
                 
            if(parseInt(item.id) === id){
             const updateitem ={...item ,estimated_price:value };
             bool_for_availabe2 = true ;
             return updateitem ;
            }
             return item ;
        }
        ); 
 
       if(!bool_for_availabe2){
 
       const newlist12 = income_cat_list.concat({  category:name_of_category ,estimated_price:value , id:id });
       
       set_income_cat_list(newlist12);
         
         }else {
 
            set_income_cat_list(newlist2);   
         }
           
         
         console.log(income_cat_list);
         

         const test4 = income_cat_list.map((list,id_for)=>{
            //  console.log(typeof(index_main));
              console.log(list.id);
                 if(2 == list.id){
                    console.log('in');
                    return list.estimated_price ;
                  }
  
          })

          console.log(test4);
     }; */