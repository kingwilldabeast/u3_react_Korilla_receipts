import Person from './Person'
import Order from './Order'

export default function ReceiptItem (props) {
    // console.log(props)
    // const thing = ""
    return (
      
      <div className="ReceiptItem">
        <Person person={props.receipt.person}/>
        <Order order={props.receipt.order}/>
        {props.receipt.paid ? <div className='logo'>🤑</div> : <div className='logo'>👿</div> }
      </div>
    )
  }