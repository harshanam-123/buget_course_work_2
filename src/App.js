import React, { useState } from 'react';
import './App.css';
import './style/css/navigation.css';
import AddTransaction from './components/AddTransacion';
import TransactionSection from './components/transaction-section';
import CategorySection from './components/category-section';
import Data from './json/history.json'

function App() {

  const [isOpen, setIsOpen] = useState(false);
  
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }


  const [intransaction, setscreen] = useState({TransactionSection});
console.log(intransaction);
 const togglescreen01 = () => {
    setscreen(TransactionSection);
    console.log(intransaction)
  }
 var fruitStateVariable = useState('banana'); // Returns a pair
 console.log("here start");
 console.log(fruitStateVariable);

  const togglescreen02 = () => {
    //setscreen(CategorySection);
   // console.log(intransaction)
   
  } 

  return (
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
            <button className="inside-header" onClick={togglescreen01}>
              Transaction History ( Sorted by Date )
            </button>
            <button className="inside-category-b" onClick={togglescreen02}> 
              Category List 
            </button>
          </div>
         
           {isOpen && < AddTransaction handleClose={togglePopup}  />}
           <div className="container">
           
         {Data.map(post=>{
            return (
              <div className="container-bottom" id={post.id}>

                  <TransactionSection 
                  id = {post.id} 
                  title ={post.title}
                  cost ={post.cost}
                  date ={post.date}
                  category ={post.category}
                  note ={post.note}
                  
                  />
                </div>

            )

         })}


         
       
        
       </div>
    </div>
  );
}

export default App;

//git push https://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@github.com/harshanam-123/buget_course_work_2.git

