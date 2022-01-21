import "../style/css/add-transaction.css"


const AddTransaction = props => {
    return (
        <div className="transaction-pop-up">
            <div className="inside-add-transaction">
                <div className="header">Add Transaction</div>
                <hr></hr>
                <div className="middle-container">
                    <div className="middle-top">
                        <div className="title-container">
                            <title>Title :</title>
                            <input type="text" className="input-title"/>
                        </div>
                        <div className="category-container">
                            <title>Category :</title>
                            <input type="button" className="input-title" value={"Select the category >"}/>
                        </div>
                        <div className="amount-container">
                            <title>Amout :</title>
                            <input type="text" className="input-title"/>
                        </div>
                    </div>
                    <div className="middle-bottom">
                        <div className="description-bottom">
                            <title>Add a Note :</title>
                            <input type="text" className="input-title"/>
                        </div>
                    </div>


                </div>
                <div className="bottom-button">
                <button className="inside-add-button">Add</button>
                    <button className="inside-cancel-button" onClick={props.handleClose}>Cancel</button>
                    
                </div>
                
            </div>

        </div>

     );
}
 
export default AddTransaction;