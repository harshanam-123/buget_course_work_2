import "../style/css/add-transaction.css"
import React, { useEffect, useState } from 'react';
import { MdZoomIn } from "react-icons/md";
import useFetch from "../usefetch";
import SelectCategory from "./SelectCategory";
import SelectBudget from "./transaction/SelectBudget";

const AddTransaction = props => {

    
    const[cost , setamount] = useState(null);
    const[note , setnote] = useState('');
    const[addingpending , setpending] = useState(false);
    const[categoryscreen , setcategoryscreen] = useState(false);
    const[budgetscreen , setbudgetscreen] = useState(false);
    const[cate_name , setcate_name]= useState("select the category")
    const[budget_name , set_budget_name]= useState("select the Budget")
  

    const haddlesubmit =(e)=> {
        const category = cate_name;
        let date = new Date().toLocaleString();
        let title = note ;

        e.preventDefault();
        const blog = {title , category , cost , date ,budget_name} ;
        console.log(blog);

        fetch('http://localhost:8000/history/' ,{

        method : 'POST' ,
       // headers : {"Content-Type":"application/json"},
        //body :JSON.stringify(blog)
        body:JSON.stringify(blog)
        }).then(()=>{
            console.log('new blog added') ;
            setpending(false);
            window.location.reload();
            props.handleClose();
            
        })

    }

    const togglecategorysection = () => {
     setcategoryscreen(!categoryscreen);
     console.log("inside here");
      }

      const togglebudgetsection = () => {
        setbudgetscreen(!budgetscreen);
        console.log("inside budget here");
         }

      const get_cat_name = (title)=>{

        console.log(title);
        {title && togglecategorysection() }
        {title && setcate_name(title) }
      }

      const get_budget_name = (title)=>{

        console.log(title);
        {title && togglebudgetsection() }
        {title && set_budget_name(title) }
      }

    return (
        <div className="transaction-pop-up">
              {categoryscreen && < SelectCategory  close_select_category={togglecategorysection} get_cat = {get_cat_name}/>}
              {budgetscreen && < SelectBudget  close_select_budget={togglebudgetsection} get_budget = {get_budget_name}/>}
            <form action="" className="transaction-pop-up"  onSubmit={haddlesubmit}>
            <div className="inside-add-transaction">
                <div className="header">Add Transaction</div>
                <hr></hr>
                <div className="middle-container">
                    <div className="middle-top">
                        <div className="title-container">
                            <title>Select Budget :</title>
                            <input 
                            type={'button'}
                            className="input-title" 
                            required
                            value = {budget_name} 
                            onClick={()=>togglebudgetsection()}
                            
                            
                            />
                        </div>
                        <div className="category-container">
                            <title>Category :</title>
                            <input className="input-title" 
                            type={'button'}
                            onClick={()=>togglecategorysection()}
                            value={cate_name}
                            />
                           
                        </div>
                        <div className="amount-container">
                            <title>Amout :</title>
                            <input type="number"
                             className="input-title" 
                             refs="phone"
                             required
                             value = {cost}
                             placeholder="in LKR"
                             onChange={(e)=>setamount(e.target.value)}
                             
                             />
                        </div>
                    </div>
                    <div className="middle-bottom">
                        <div className="description-bottom">
                            <title>Add a Note :</title>
                            <input type="text" 
                            className="input-title"
                            required
                            value = {note} 
                            onChange={(e)=>setnote(e.target.value)}
                            />
                        </div>
                    </div>


                </div>
                <div className="bottom-button">
                {!addingpending && <button className="inside-add-button" type="submit">Add</button>}
                {addingpending && <button  disabled className="inside-add-button" type="submit">Adding..</button>}
                    <button className="inside-cancel-button" onClick={props.handleClose}>Cancel</button>
                    
                </div>
                
            </div>
            </form>
        </div>

     );
}
 
export default AddTransaction;