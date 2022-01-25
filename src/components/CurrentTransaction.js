import { useHistory , useParams} from "react-router-dom"
import React, { useEffect, useState } from 'react';
import '../App.css';
import '../style/css/navigation.css';

import AddTransaction from "./AddTransacion";
import TransactionSection from "./transaction-section";
import useFetch from '../usefetch';




  
const CurrentTransaction = () => {

  const {transactionlist, error} = useFetch('http://localhost:8000/history/' );

  const deletetransaction=(id)=>{
   console.log(id) ;
    fetch('http://localhost:8000/history/'+ id,{
      method:'DELETE'
    }).then(()=>{

      window.location.reload();
    }) .catch(err => {
      console.log(err);
 
    })

}
 
 
  const [intransaction, setscreen] = useState({TransactionSection});
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup_add_transaction = () => {
    setIsOpen(!isOpen);
 
  }
 
  
    return ( 

        <div className="inside-current-transaction">
                 {isOpen && < AddTransaction handleClose={togglePopup_add_transaction}  />}
                <div className="add_bud_wrapper">
                 <button className="add-budget-button"onClick={togglePopup_add_transaction}>+ Add Transaction</button>
                 
                 </div>
                 <hr></hr>
                {error &&  <div className="container-1">
              {error}
              </div>}
          {transactionlist && <div className="container-1">
           
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
                  deletesection ={deletetransaction}
                  
                  /> 
                </div>

            )

         })}

       </div> }


        </div>

        
     );
}
 
export default CurrentTransaction;