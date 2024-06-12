import ReceiptItem from './ReceiptItem'


export default function ReceiptList (props) {
    console.log(props)
    // const thing = ""
    return (
      
      <div className="ReceiptList">
        <ul>
            {props.receipts.map((receipt)=> 
                                <ReceiptItem 
                                key = {receipt.id}
                                id = {receipt.id}
                                receipt = {receipt}
                        />
            )}
        </ul>
      </div>
    )
  }