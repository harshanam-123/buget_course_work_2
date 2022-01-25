import useFetch from '../../usefetch'
import '../../style/css/selectcategory.css'
import { MdClose } from "react-icons/md";
import '../../style/css/transaction_css/selectbudget.css'



const SelectBudget = (props) => {
    const getthecategory = (title_name) =>{
        props.get_cat(title_name);
    
      }

      const {transactionlist:budget_list_to_select, error} = useFetch('http://localhost:8000/budget/' );
        return (
   
            <div className="category-pop-up">
        <div className="inside-category">
        <div className="header_container">
          <div className="header-category">Select the Category</div>
          <div className="close_button"><button className='button-icon' onClick={props.close_select_budget}><MdClose/></button></div>
        </div>
                    <hr></hr>
    
    
    
        <div className="category-container-bottom">
        {budget_list_to_select && budget_list_to_select.slice().reverse().map((post ,index)=>{

                return (
                      <button className='budget-container-wrapper' onClick={()=>props.get_budget(post.title)}>
                    <div className="inside_single_budget_container">
                        <div className="budget_name">{post.title}</div>
                        <div className="budget_date">Created Date - {post.created_date}</div>
                        
                    </div>
                    <hr></hr>
                    </button>
                )

        })}
            
            
            </div>
    
        </div>
        </div>
        
    
          );
}
 
export default SelectBudget;


