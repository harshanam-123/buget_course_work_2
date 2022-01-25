import "../style/css/transaction-section.css"
import { AiFillEdit } from 'react-icons/ai';

import { MdDelete } from 'react-icons/md';


const TransactionSection = props=> {
   
    return (  
        <div className="single_budegt_container">

        <div className="bud_part_1">
           <div className="title_top">{props.title}</div>
           <div className="container_date">{props.date}</div>
        
        
        </div>
        <div className="bud_part_2">
          <div className="real-income">
          {props.category}</div>
          <div className="assumed-income">
          ({props.budget_name})</div>
        
        </div>
        <div className="bud_part_3">
              <div className="real-expense">
             Rs {props.cost}
              </div>
              <div className="assumed-expense">
              
            </div>
        
        </div>
        <div className="bud_part_4">
        
        <div className="button-wrapper">
              <button className="view-note">View Note</button>
              <button className="view-note-icon"><AiFillEdit /></button>
              <button className="view-note-icon" onClick={()=>props.deletesection(props.id)}><MdDelete/></button>
          </div>
        </div>
        
        
        </div>
    );
}
 
export default TransactionSection;









/*

   <div className="body-transaction">
        <div className="inside-transaction-section">
          <div className="header-transaction-section">
              <div className="transacion-title">{props.title}</div>
              <div className="transaction-category">- {props.category}</div>
              <div className="transacion-date">{props.date}</div>
           
          </div>
          
            <div className="transaction-section-price">
                + {props.cost}
          </div>
          <div className="button-wrapper">
              <button className="view-note">View Note</button>
              <button className="view-note-icon"><AiFillEdit /></button>
              <button className="view-note-icon" onClick={()=>props.deletesection(props.id)}><MdDelete/></button>
          </div>
          <hr></hr>

        </div>
        <hr></hr>
        </div>

        */