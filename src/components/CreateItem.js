import CreateDate from './CreateDate.js';
import './CreateItem.css';
import Card from './Card.js';


// function CreateItem() {
//     const CreateItem = new Data(2023,04,21);
//     const CreateNewItem = 'Insurance';
//     const CreateAmount = $100;

// }

function CreateItem(props) {
    // const createDate = new Date(2023, 5, 21);
    // const createTitle = 'insurance';
    // const createPrice = 100;


    return (
   
    <Card className="expense-item">
    <CreateDate date={props.date}></CreateDate>

   

    {/* <div>{createDate.toISOString}</div> */}
    <div className="expense-item__description">
    <h2>{props.title}</h2>
    <div className="expense-item__price">${props.amount}</div>
    </div>
    </Card>
  
    );
}

export default CreateItem;