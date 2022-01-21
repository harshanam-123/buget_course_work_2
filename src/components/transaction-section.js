import "../style/css/transaction-section.css"
import { AiFillEdit } from 'react-icons/ai';

import { MdDelete } from 'react-icons/md';


const TransactionSection = props=> {
    return (  
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
              <button className="view-note-icon"><MdDelete/></button>
          </div>
          <hr></hr>

        </div>
        <hr></hr>
        </div>
    );
}
 
export default TransactionSection;