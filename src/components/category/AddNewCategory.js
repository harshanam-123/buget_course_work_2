
import React, { useEffect, useState } from 'react';
import { MdClose } from "react-icons/md";
import "../../style/css/category_css/category.css"

const AddNewCategory = (props) => {

     
    const [category_title, setcategorytitle] = useState('');
    const[category_description , set_category_description] = useState('')
    const[addingpending , setpending] = useState(false);
    const [categorytype , set_categorytype] = useState('expenses')
    const [categoryrecurrence , set_recurrence] = useState('')
    const[active_re_text , set_active_re_text] = useState(false)
    const[re_input , set_re_input] = useState('')
    const[recu , set_recu] = useState('not a Recurring Transaction')

    const recurrence_status=(e)=>{

        set_recurrence(e)
        console.log(e);
        if(e=='no_re'){ 
            set_active_re_text(false);
            set_re_input('');
            set_recu('not a Recurring Transaction')
        }else if(e=='yes_re'){
            set_active_re_text(true);
            set_recu('a Recurring Transaction')
        }

    }
     
    const haddlebudgetsubmit = (e) => {
             
           
              let created_date = new Date().toLocaleString();
             
              e.preventDefault();
              const blog = {title:category_title , created_date , description:category_description, recurrance_status:active_re_text, allocation:re_input , current_allocation:null , category_re_state:recu} ;
              ///console.log(blog);
               console.log(categorytype);
               let path = '' ;
               if(categorytype=='expenses'){
                 path = 'http://localhost:8000/expenses' ;

               }else if(categorytype=='income'){
                 path = 'http://localhost:8000/income' ;
               }
              
              console.log(path);
              
              fetch(path ,{
      
              method : 'POST' ,
              headers : {"Content-Type":"application/json"},
              body :JSON.stringify(blog)
              }).then(()=>{
                  console.log('new blog added') ;
                 // setpending(false);
                  window.location.reload();
                 // props.handleClose();
                 props.handleClose();
                  
              })
              
    };

    return ( 

<form className="inside_add_new_category" onSubmit={haddlebudgetsubmit}>

                <div className="inside-add-budget">
                    <div className="header-add-budget">
                        <div className="header-budget">Add Category</div>
                        <div className="close_button_budget "><button className='button-icon' onClick={props.handleClose}><MdClose /></button></div>
                    </div>
                    <hr style={{ height: '2px', backgroundColor: 'black' }}></hr>

                    <div className="add-budget-middle-container">
                        <title>Category Name :</title>
                        <input
                            type="text"
                            className="input-title-budget"
                            required
                            placeholder='Enter a name for Category....'
                            value={category_title}
                            onChange={(e) => setcategorytitle(e.target.value)} 
                            
                            />
                    </div>

                    <div className="add-budget-middle-container">
                        <title> Note (Description) :</title>
                        <input
                            type="text"
                            className="input-title-budget"
                            required
                            placeholder='Write a Note....'
                            value={category_description}
                            onChange={(e) => set_category_description(e.target.value)} 
                            
                            />
                    </div>
                    <title style={{ paddingBottom: '20px', paddingTop: '20px' }}>Select Income or Expense :</title>

                    <select
                           
                            className="select-category-type"
                            required
                            value={categorytype}
                            onChange={(e) => set_categorytype(e.target.value)} >

                                <option value="expenses">Expenses</option>
                                <option value="income">Income</option>
                            
                    </select>
                    <title style={{ paddingBottom: '20px', paddingTop: '20px' }}>Select recurrence or not :</title>
                    
                    <div className="inside_re">
                    <select
                           
                           className="select-category-type"
                           required
                           value={categoryrecurrence}
                           onChange={(e) => recurrence_status(e.target.value)} >
                             <option value="no_re"> not recurrence</option>
                               <option value="yes_re">Recurrence</option>
                              
                           
                   </select>


                    {active_re_text &&  <input
                            type="number"
                            className="input-title-re"
                            required
                            placeholder='in Rs....'
                            value={re_input}
                            onChange={(e) => set_re_input(e.target.value)} 
                            
                            />}
                    </div>


                    <div className="button-submit">

                    {!addingpending && <button className="submit-for-budget" type="submit">Add</button>}
                    {addingpending && <button  disabled className="submit-for-budget" type="submit">Adding..</button>}
                    </div>

                 
                </div>

            </form>





    


     );
}
 
export default AddNewCategory;