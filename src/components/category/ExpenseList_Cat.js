import TransactionSection from "../transaction-section";

const deletecategory=(id)=>{
    console.log(id) ;
     fetch('http://localhost:8000/expenses/'+ id,{
       method:'DELETE'
     }).then(()=>{
 
       window.location.reload();
     }) .catch(err => {
       console.log(err);
  
     })
 
 }

const ExpenseList_Cat = (props) => {
    return (  
        <>
        
        {props.expense_list.slice().reverse().map(post=>{
            return (
              <div className="container-bottom" id={post.id}>

                  <TransactionSection 
                  id = {post.id} 
                  title ={post.title}
                  cost ={post.allocation}
                  date ={post.created_date}
                  category ={post.description}
                  budget_name ={post.category_re_state}
                  deletesection ={deletecategory}
                  
                  /> 
                </div>

            )

         })}
        
        
        
        </>
    );
}
 
export default ExpenseList_Cat;